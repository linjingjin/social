const mockTitles = [
    '【版本前瞻】手游新版本预告',
    '重爪新模型，部分恐龙新',
    '恐龙品（追咒之岛）',
    '优质用户推荐',
    '若梦%落在捕梦网里的小家',
    '米加小镇日常生活',
    '关注我，随机抽人送礼！',
    '摸烂随手元老评测，每天就是',
    '【推荐地图一醉花酒肆】第三期',
    '我是你的乖乖',
    '三角洲行动：全面战场趣味性升级',
    '梅丽莎连招小技巧！用害再上一层楼'
];
const mockUsernames = [
    '泡芙云', '小鱼酱n·', '青空千绪', '大橘无情',
    '熊猫游戏视频', '阿辞', '送你世界', '决掉猫嫌'
];
const mockTags = [
    '游戏圈', '樱花校园', '模拟器', '恐龙品',
    '追咒之岛', '米加小镇', '三角洲行动'
];
const mockMedia = [
    { type: 'image', url: 'https://picsum.photos/600/800?random=1' },
    { type: 'image', url: 'https://picsum.photos/600/1000?random=2' },
    { type: 'video', url: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4' },
    { type: 'image', url: 'https://picsum.photos/600/900?random=3' },
    { type: 'image', url: 'https://picsum.photos/600/700?random=4' },
    { type: 'video', url: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4' },
    { type: 'image', url: 'https://picsum.photos/600/800?random=5' },
    { type: 'image', url: 'https://picsum.photos/600/600?random=6' },
    { type: 'video', url: 'https://samplelib.com/lib/preview/mp4/sample-15s.mp4' },
    { type: 'image', url: 'https://picsum.photos/600/900?random=7' }
];
export function useMockData(theme = 'default') {
    const generatePost = (index) => {
        const mediaIndex = index % mockMedia.length;
        let title, tag;
        if (theme === 'game') {
            title = mockTitles.filter(t => t.includes('游戏') || t.includes('模型') || t.includes('推荐'))[Math.floor(Math.random() * 5)] || mockTitles[0];
            tag = mockTags.filter(t => t.includes('游戏') || t.includes('模拟'))[Math.floor(Math.random() * 3)] || mockTags[0];
        }
        else if (theme === 'life') {
            title = mockTitles.filter(t => t.includes('生活') || t.includes('小镇') || t.includes('家'))[Math.floor(Math.random() * 4)] || mockTitles[0];
            tag = mockTags.filter(t => t.includes('小镇') || t.includes('校园'))[Math.floor(Math.random() * 2)] || mockTags[0];
        }
        else {
            title = mockTitles[Math.floor(Math.random() * mockTitles.length)] || mockTitles[0];
            tag = mockTags[Math.floor(Math.random() * mockTags.length)] || mockTags[0];
        }
        return {
            id: index,
            title,
            tag,
            username: mockUsernames[Math.floor(Math.random() * mockUsernames.length)] || mockUsernames[0],
            avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
            likes: Math.floor(Math.random() * 1000),
            comments: Math.floor(Math.random() * 500),
            shares: Math.floor(Math.random() * 200),
            media: mockMedia[mediaIndex]
        };
    };
    const loadMorePosts = (currentPosts, count = 10) => {
        const newPosts = [];
        const startId = currentPosts.length > 0 ? currentPosts[currentPosts.length - 1].id + 1 : 0;
        for (let i = 0; i < count; i++) {
            newPosts.push(generatePost(startId + i));
        }
        return newPosts;
    };
    return {
        loadMorePosts
    };
}
//# sourceMappingURL=useMockData.js.map