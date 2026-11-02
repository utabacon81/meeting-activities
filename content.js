/*
  Meeting Activities: weekly content.
  This is the only file the weekly update changes. Words are written in CAPITALS.
  Sources: wol.jw.org meeting schedule (titles, scripture references and song numbers only).
*/
window.MEETING_CONTENT = {
  updated: '2026-11-02',
  // Words heard in nearly every meeting. Used on every bingo card and for Count the Word.
  core: ['JEHOVAH', 'JESUS', 'BIBLE', 'SCRIPTURE', 'PRAY', 'LOVE', 'HEART', 'KINGDOM', 'HAPPY'],
  common: ['JEHOVAH', 'JESUS', 'BIBLE', 'GOD', 'KINGDOM', 'LOVE', 'PRAYER', 'SCRIPTURE', 'BROTHERS', 'FATHER', 'PARADISE', 'HEART', 'CHRIST', 'FAITH'],
  // Count the Word: how many times a word is likely to be heard in one talk. Words not listed default to 2.
  commonGoals: { JEHOVAH: 5, JESUS: 4, GOD: 3, BIBLE: 3, LOVE: 3, KINGDOM: 2, PRAYER: 2, SCRIPTURE: 2, BROTHERS: 2, FATHER: 2, PARADISE: 2, HEART: 2, CHRIST: 2, FAITH: 2 },
  general: ['SONG', 'FAMILY', 'FRIENDS', 'KING', 'PARADISE', 'WORLD', 'CHILD', 'SUN', 'STAR', 'TALK', 'HELP', 'FATHER'],
  meetings: [
    {
      id: 'mw-2026-11-02', kind: 'midweek', label: 'Midweek', dates: 'Nov 2-8',
      title: 'Life and Ministry Meeting', reading: 'Jeremiah 49-50', songs: [1, 44, 33],
      words: ['MERCY', 'FORGIVE', 'BABYLON', 'ARROW', 'TRAP', 'SWORD', 'HORSE', 'CHARIOT', 'FIRE', 'NAOMI', 'RUTH', 'MOAB', 'REMEMBER', 'DOOR', 'KIND'],
      count: ['MERCY', 'BABYLON', 'FORGIVE', 'NAOMI', 'RUTH'],
      goals: { MERCY: 4, BABYLON: 3, FORGIVE: 2, NAOMI: 2, RUTH: 2 },
      parts: [
        { section: 'Treasures From God’s Word', title: 'Help Others Benefit From Jehovah’s Mercy', time: '10 min', scriptures: ['Jeremiah 50:14, 29, 31', 'Jeremiah 50:20', 'Jeremiah 50:2, 8'],
          kid: 'Jehovah forgives people who are sorry', words: ['MERCY', 'FORGIVE', 'SORRY', 'BABYLON', 'ARROW', 'PROUD', 'ISRAEL', 'KIND'] },
        { section: 'Treasures From God’s Word', title: 'Spiritual Gems', time: '10 min', scriptures: ['Jeremiah 50:24'],
          kid: 'Babylon gets caught in a trap', words: ['TRAP', 'SNARE', 'CAUGHT', 'BABYLON', 'GEMS', 'CITY', 'BIBLE', 'LEARN'] },
        { section: 'Treasures From God’s Word', title: 'Bible Reading', time: '4 min', scriptures: ['Jeremiah 50:24-40'],
          kid: 'A Bible reading about Babylon', words: ['SWORD', 'HORSE', 'CHARIOT', 'FIRE', 'BULL', 'GRAIN', 'WATER', 'OSTRICH'] },
        { section: 'Apply Yourself to the Field Ministry', title: 'Starting a Conversation', time: '3 min', scriptures: [],
          kid: 'Sharing a Bible truth at the door', words: ['DOOR', 'HOUSE', 'SMILE', 'HELLO', 'TRUTH', 'BIBLE', 'TALK', 'KIND'] },
        { section: 'Apply Yourself to the Field Ministry', title: 'Following Up', time: '4 min', scriptures: [],
          kid: 'Visiting again and listening well', words: ['FRIEND', 'VISIT', 'AGAIN', 'LISTEN', 'QUESTION', 'BIBLE', 'SMILE', 'TALK'] },
        { section: 'Apply Yourself to the Field Ministry', title: 'Making Disciples', time: '5 min', scriptures: [],
          kid: 'Teaching someone about the Bible', words: ['TEACH', 'STUDY', 'FRIEND', 'BIBLE', 'LEARN', 'QUESTION', 'HEART', 'TALK'] },
        { section: 'Living as Christians', title: 'Never Forget What Jehovah Remembers', time: '15 min', scriptures: [],
          kid: 'A video, then talking about it', words: ['REMEMBER', 'FORGET', 'VIDEO', 'JEHOVAH', 'LISTEN', 'HEART', 'LOVE', 'LEARN'] },
        { section: 'Living as Christians', title: 'Congregation Bible Study', time: '30 min', scriptures: [],
          kid: 'Naomi and Ruth stay together', words: ['NAOMI', 'RUTH', 'MOAB', 'FAMILY', 'FRIEND', 'SAD', 'LOVE', 'QUESTION'] }
      ]
    },
    {
      id: 'we-2026-11-08', kind: 'weekend', label: 'Weekend', dates: 'Nov 7-8',
      title: 'Public Talk and Watchtower Study', reading: '', songs: [3, 8],
      words: ['TRUST', 'PROTECT', 'REFUGE', 'SAFE', 'PSALM', 'WINGS', 'SHIELD', 'ARROW', 'LION', 'SNAKE', 'ANGEL', 'PARADISE', 'PEACE', 'FAMILY'],
      count: ['PROTECT', 'TRUST', 'REFUGE', 'PSALM'],
      goals: { PROTECT: 4, TRUST: 3, REFUGE: 2, PSALM: 2 },
      parts: [
        { section: 'Public Talk', title: 'Public Bible Talk', time: '30 min', scriptures: [],
          kid: 'Listen to the speaker', words: ['BIBLE', 'KINGDOM', 'PARADISE', 'WORLD', 'FAMILY', 'LISTEN', 'FUTURE', 'PEACE'] },
        { section: 'Watchtower Study', title: 'Trust In Jehovah for Protection', time: '60 min', scriptures: ['Psalm 91:9'],
          kid: 'Jehovah keeps his friends safe', words: ['TRUST', 'PROTECT', 'REFUGE', 'SAFE', 'WINGS', 'SHIELD', 'LION', 'ANGEL'],
          points: ['A Psalm About Trust and Protection', 'What Kind of Protection Does Psalm 91 Promise?', 'How Does Jehovah Protect Us Now?', 'How Will Jehovah Protect Us in the Future?'] }
      ]
    },
    {
      id: 'ca-2026-2027', kind: 'assembly', label: 'Circuit Assembly', dates: '2026-2027',
      title: '“Happy Is the One Trusting in Jehovah”', reading: 'Proverbs 16:20', songs: [31, 57, 29, 8, 135, 54],
      words: ['TRUST', 'BARAK', 'DANIEL', 'LION', 'FIRE', 'KING', 'BAPTISM', 'WATER', 'HAPPY', 'SONG', 'WISDOM', 'FAMILY'],
      count: ['TRUST', 'HAPPY'],
      goals: { TRUST: 4, HAPPY: 3 },
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
