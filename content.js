/*
  Meeting Activities: weekly content.
  This is the only file the weekly update changes. Words are written in CAPITALS.
  Sources: wol.jw.org meeting schedule (titles, scripture references and song numbers only).
*/
window.MEETING_CONTENT = {
  updated: '2026-10-20',
  // Words heard in nearly every meeting. Used on every bingo card and for Count the Word.
  core: ['JEHOVAH', 'JESUS', 'BIBLE', 'SCRIPTURE', 'PRAY', 'LOVE', 'HEART', 'KINGDOM', 'HAPPY'],
  common: ['JEHOVAH', 'JESUS', 'BIBLE', 'GOD', 'KINGDOM', 'LOVE', 'PRAYER', 'SCRIPTURE', 'BROTHERS', 'FATHER', 'PARADISE', 'HEART', 'CHRIST', 'FAITH'],
  general: ['SONG', 'FAMILY', 'FRIENDS', 'KING', 'PARADISE', 'WORLD', 'CHILD', 'SUN', 'STAR', 'TALK', 'HELP', 'FATHER'],
  meetings: [
    {
      id: 'mw-2026-10-19', kind: 'midweek', label: 'Midweek', dates: 'Oct 19-25',
      title: 'Life and Ministry Meeting', reading: 'Jeremiah 45-46', songs: [21, 117, 87],
      words: ['HOPE', 'BARUCH', 'JEREMIAH', 'EGYPT', 'SNAKE', 'SHARE', 'KIND', 'GIVE', 'HAPPY', 'DOOR', 'SMILE', 'JESUS', 'FATHER', 'TREE', 'KING'],
      count: ['SHARE', 'HOPE'],
      parts: [
        { section: 'Treasures From God’s Word', title: 'Hope Is Key to Contentment', time: '10 min', scriptures: ['Jeremiah 45:3, 5'],
          kid: 'Baruch learns to be happy', words: ['HOPE', 'HAPPY', 'BARUCH', 'JEREMIAH', 'SCROLL', 'PARADISE', 'LIFE', 'PROMISE'] },
        { section: 'Treasures From God’s Word', title: 'Spiritual Gems', time: '10 min', scriptures: ['Jeremiah 46:22'],
          kid: 'Egypt hisses like a snake', words: ['SNAKE', 'EGYPT', 'TREE', 'KING', 'RIVER', 'GEMS', 'FOREST', 'SOUND'] },
        { section: 'Treasures From God’s Word', title: 'Bible Reading', time: '4 min', scriptures: ['Jeremiah 46:13-24'],
          kid: 'A Bible reading about Egypt', words: ['EGYPT', 'KING', 'SWORD', 'COW', 'TREE', 'SNAKE', 'CITY', 'READ'] },
        { section: 'Apply Yourself to the Field Ministry', title: 'Starting a Conversation (three demonstrations)', time: '7 min', scriptures: [],
          kid: 'Talking to people about the Bible', words: ['DOOR', 'HOUSE', 'SMILE', 'KIND', 'SAD', 'LISTEN', 'TALK', 'HELP'] },
        { section: 'Apply Yourself to the Field Ministry', title: 'Talk: Jesus Is Not God Almighty', time: '4 min', scriptures: [],
          kid: 'Jesus is Jehovah’s Son', words: ['JESUS', 'FATHER', 'SON', 'PRAY', 'TEACH', 'HEAVEN', 'KING', 'LISTEN'] },
        { section: 'Living as Christians', title: '“Share What You Have With Others”', time: '15 min', scriptures: ['Ephesians 4:28', '1 Timothy 6:17, 18', 'Hebrews 13:16', '2 Corinthians 8:2-4'],
          kid: 'Be kind and share', words: ['SHARE', 'GIVE', 'KIND', 'HELP', 'GIFT', 'FOOD', 'FRIENDS', 'VIDEO'] },
        { section: 'Living as Christians', title: 'Congregation Bible Study', time: '30 min', scriptures: [],
          kid: 'Questions and answers', words: ['QUESTION', 'ANSWER', 'BOOK', 'READ', 'LISTEN', 'HAND', 'PICTURE', 'LEARN'] }
      ]
    },
    {
      id: 'we-2026-10-25', kind: 'weekend', label: 'Weekend', dates: 'Oct 24-25',
      title: 'Public Talk and Watchtower Study', reading: '', songs: [106, 154],
      words: ['PAUL', 'LETTER', 'LOVE', 'FORGIVE', 'FRIEND', 'KIND', 'PEACE', 'SORRY', 'THANK', 'WELCOME', 'HOME', 'BROTHER', 'HELP', 'CHAIN'],
      count: ['LOVE', 'PAUL'],
      parts: [
        { section: 'Public Talk', title: 'Public Bible Talk', time: '30 min', scriptures: [],
          kid: 'Listen to the speaker', words: ['BIBLE', 'KINGDOM', 'PARADISE', 'WORLD', 'FAMILY', 'LISTEN', 'FUTURE', 'PEACE'] },
        { section: 'Watchtower Study', title: 'An Appeal on the Basis of Love', time: '60 min', scriptures: ['Philemon 9'],
          kid: 'Paul writes a letter for a friend', words: ['PAUL', 'LETTER', 'FORGIVE', 'SORRY', 'FRIEND', 'WELCOME', 'HOME', 'CHAIN'],
          points: ['The Appeal', 'Lessons to Learn From Paul’s Example', 'Lessons to Learn From Onesimus’ Example', 'Lessons to Learn From Philemon’s Example'] }
      ]
    },
    {
      id: 'ca-2026-2027', kind: 'assembly', label: 'Circuit Assembly', dates: '2026-2027',
      title: '“Happy Is the One Trusting in Jehovah”', reading: 'Proverbs 16:20', songs: [31, 57, 29, 8, 135, 54],
      words: ['TRUST', 'BARAK', 'DANIEL', 'LION', 'FIRE', 'KING', 'BAPTISM', 'WATER', 'HAPPY', 'SONG', 'WISDOM', 'FAMILY'],
      count: ['TRUST', 'HAPPY'],
      parts: [
        { section: 'Morning', title: 'Why “Trust in Jehovah With All Your Heart”?', scriptures: ['Proverbs 3:5'], kid: 'Trust Jehovah with all your heart', words: ['HEART', 'WISDOM', 'FATHER', 'FRIENDS', 'HELP', 'PATH', 'FAMILY', 'STRONG'] },
        { section: 'Symposium', title: 'Imitate Those Who Trusted in Jehovah: Barak', scriptures: ['Judges 4, 5'], kid: 'Barak and the big storm', words: ['MOUNTAIN', 'STORM', 'WATER', 'SWORD', 'CHARIOT', 'WOMAN', 'STAR', 'STRONG'] },
        { section: 'Symposium', title: 'Imitate Those Who Trusted in Jehovah: The Shunammite Woman', scriptures: ['2 Kings 4'], kid: 'A room on the roof for Elisha', words: ['HOUSE', 'BED', 'WOMAN', 'PROPHET', 'BABY', 'FOOD', 'HELP', 'FAMILY'] },
        { section: 'Symposium', title: 'Imitate Those Who Trusted in Jehovah: Daniel, Hananiah, Mishael, and Azariah', scriptures: ['Daniel 3', 'Daniel 6'], kid: 'Daniel, the lions and the fire', words: ['LION', 'FIRE', 'KING', 'STATUE', 'ANGEL', 'FOOD', 'FRIENDS', 'STRONG'] },
        { section: 'Morning', title: 'Help Others Trust in the “Living and True God”', scriptures: [], kid: 'Telling others about Jehovah', words: ['DOOR', 'WORLD', 'FRIENDS', 'HELP', 'TALK', 'WATCHTOWER', 'FAMILY', 'PARADISE'] },
        { section: 'Morning', title: 'Baptism: “Your Father Who Looks On in Secret Will Repay You”', scriptures: ['Matthew 6:4'], kid: 'Watch people get baptized', words: ['BAPTISM', 'WATER', 'FATHER', 'EYE', 'GIFT', 'FAMILY', 'SONG', 'FRIENDS'] },
        { section: 'Afternoon', title: 'Public Bible Discourse: Whom Can You Really Trust?', scriptures: [], kid: 'Who can we trust?', words: ['FRIENDS', 'FAMILY', 'KING', 'WORLD', 'PARADISE', 'MONEY', 'STAR', 'HELP'] },
        { section: 'Afternoon', title: 'Summary of The Watchtower', scriptures: [], kid: 'Listening to the Watchtower', words: ['WATCHTOWER', 'FAMILY', 'FRIENDS', 'PARADISE', 'KING', 'WORLD', 'HELP', 'STAR'] },
        { section: 'Symposium', title: 'Trust in Jehovah’s Wisdom: When Guiding Your Children', scriptures: [], kid: 'Moms and dads teaching kids', words: ['CHILD', 'FATHER', 'WOMAN', 'FAMILY', 'HOUSE', 'PLAY', 'HELP', 'WISDOM'] },
        { section: 'Symposium', title: 'Trust in Jehovah’s Wisdom: When Planning Your Future', scriptures: [], kid: 'Plans for when you grow up', words: ['PATH', 'PARADISE', 'MONEY', 'WORK', 'GOAL', 'WORLD', 'WISDOM', 'STAR'] },
        { section: 'Symposium', title: 'Trust in Jehovah’s Wisdom: When Facing Temptation', scriptures: [], kid: 'Saying no to bad things', words: ['SAY NO', 'FRIENDS', 'WISDOM', 'EYE', 'PATH', 'STRONG', 'HELP', 'FAMILY'] },
        { section: 'Afternoon', title: '“Happy Is the One Trusting in Jehovah”', scriptures: ['Proverbs 16:20'], kid: 'The last talk of the day', words: ['SUN', 'PARADISE', 'STAR', 'FAMILY', 'FRIENDS', 'SONG', 'WORLD', 'KING'] }
      ]
    },
    {
      id: 'general', kind: 'general', label: 'Any meeting', dates: '',
      title: 'Words you hear at every meeting', reading: '', songs: [],
      words: ['JEHOVAH', 'JESUS', 'BIBLE', 'LOVE', 'PRAY', 'SONG', 'FAMILY', 'FRIENDS', 'KINGDOM', 'PARADISE', 'HEART', 'HAPPY'],
      count: [],
      parts: [
        { section: '', title: 'Any talk', scriptures: [], kid: 'Words you hear all day long', words: ['SONG', 'FAMILY', 'FRIENDS', 'KING', 'PARADISE', 'WORLD', 'CHILD', 'SUN', 'STAR', 'TALK', 'HELP', 'FATHER'] }
      ]
    }
  ]
};
