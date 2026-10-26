/*
  Meeting Activities: weekly content.
  This is the only file the weekly update changes. Words are written in CAPITALS.
  Sources: wol.jw.org meeting schedule (titles, scripture references and song numbers only).
*/
window.MEETING_CONTENT = {
  updated: '2026-10-26',
  // Words heard in nearly every meeting. Used on every bingo card and for Count the Word.
  core: ['JEHOVAH', 'JESUS', 'BIBLE', 'SCRIPTURE', 'PRAY', 'LOVE', 'HEART', 'KINGDOM', 'HAPPY'],
  common: ['JEHOVAH', 'JESUS', 'BIBLE', 'GOD', 'KINGDOM', 'LOVE', 'PRAYER', 'SCRIPTURE', 'BROTHERS', 'FATHER', 'PARADISE', 'HEART', 'CHRIST', 'FAITH'],
  // Count the Word: how many times a word is likely to be heard in one talk. Words not listed default to 2.
  commonGoals: { JEHOVAH: 5, JESUS: 4, GOD: 3, BIBLE: 3, LOVE: 3, KINGDOM: 2, PRAYER: 2, SCRIPTURE: 2, BROTHERS: 2, FATHER: 2, PARADISE: 2, HEART: 2, CHRIST: 2, FAITH: 2 },
  general: ['SONG', 'FAMILY', 'FRIENDS', 'KING', 'PARADISE', 'WORLD', 'CHILD', 'SUN', 'STAR', 'TALK', 'HELP', 'FATHER'],
  meetings: [
    {
      id: 'mw-2026-10-26', kind: 'midweek', label: 'Midweek', dates: 'Oct 26 - Nov 1',
      title: 'Life and Ministry Meeting', reading: 'Jeremiah 47-48', songs: [125, 158, 54],
      words: ['MOAB', 'JUDGE', 'KIND', 'HEART', 'TREE', 'DESERT', 'FLUTE', 'SWORD', 'CITY', 'JEREMIAH', 'DOOR', 'FRIEND', 'PRAY', 'TEACH'],
      count: ['JUDGE', 'MOAB', 'KIND', 'JEREMIAH'],
      goals: { JUDGE: 3, MOAB: 3, KIND: 2, JEREMIAH: 2 },
      parts: [
        { section: 'Treasures From God’s Word', title: 'Jehovah Is a Righteous and Merciful Judge', time: '10 min', scriptures: ['Jeremiah 48:27, 29, 42', 'Jeremiah 48:31, 36', 'Jeremiah 48:47'],
          kid: 'Jehovah is fair and kind', words: ['JUDGE', 'FAIR', 'KIND', 'MOAB', 'HEART', 'FLUTE', 'PROUD', 'ISRAEL'] },
        { section: 'Treasures From God’s Word', title: 'Spiritual Gems', time: '10 min', scriptures: ['Jeremiah 48:6'],
          kid: 'A little tree in the desert', words: ['TREE', 'DESERT', 'RUN', 'GEMS', 'MOAB', 'PLANT', 'SAFE', 'LIFE'] },
        { section: 'Treasures From God’s Word', title: 'Bible Reading', time: '4 min', scriptures: ['Jeremiah 48:1-13'],
          kid: 'A Bible reading about Moab', words: ['MOAB', 'CITY', 'SWORD', 'WINE', 'JAR', 'TREE', 'CHILD', 'READ'] },
        { section: 'Apply Yourself to the Field Ministry', title: 'Starting a Conversation', time: '3 min', scriptures: [],
          kid: 'Talking to people at their door', words: ['DOOR', 'HOUSE', 'SMILE', 'KIND', 'HELLO', 'LISTEN', 'TALK', 'BIBLE'] },
        { section: 'Apply Yourself to the Field Ministry', title: 'Following Up', time: '4 min', scriptures: [],
          kid: 'Visiting a new friend again', words: ['FRIEND', 'VISIT', 'AGAIN', 'SHARE', 'BOOK', 'TRUTH', 'SMILE', 'TALK'] },
        { section: 'Apply Yourself to the Field Ministry', title: 'Making Disciples', time: '5 min', scriptures: [],
          kid: 'Helping a Bible student pray more', words: ['TEACH', 'PRAY', 'STUDY', 'FRIEND', 'BIBLE', 'LEARN', 'HEART', 'TALK'] },
        { section: 'Living as Christians', title: 'Local Needs', time: '15 min', scriptures: [],
          kid: 'A talk for our own congregation', words: ['FRIENDS', 'FAMILY', 'HELP', 'LISTEN', 'LOVE', 'ELDER', 'TALK', 'MEETING'] },
        { section: 'Living as Christians', title: 'Congregation Bible Study', time: '30 min', scriptures: [],
          kid: 'Questions and answers', words: ['QUESTION', 'ANSWER', 'BOOK', 'READ', 'LISTEN', 'HAND', 'PICTURE', 'LEARN'] }
      ]
    },
    {
      id: 'we-2026-11-01', kind: 'weekend', label: 'Weekend', dates: 'Oct 31 - Nov 1',
      title: 'Public Talk and Watchtower Study', reading: '', songs: [62, 159],
      words: ['ZECHARIAH', 'JOHN', 'SALVATION', 'SERVICE', 'PREACH', 'BRAVE', 'GIFT', 'DAVID', 'ELIZABETH', 'BABY', 'LAMB', 'PARADISE', 'PEACE', 'FAMILY'],
      count: ['SERVICE', 'SALVATION', 'ZECHARIAH', 'PREACH', 'JOHN'],
      goals: { SERVICE: 4, SALVATION: 3, ZECHARIAH: 3, PREACH: 2, JOHN: 2 },
      parts: [
        { section: 'Public Talk', title: 'Public Bible Talk', time: '30 min', scriptures: [],
          kid: 'Listen to the speaker', words: ['BIBLE', 'KINGDOM', 'PARADISE', 'WORLD', 'FAMILY', 'LISTEN', 'FUTURE', 'PEACE'] },
        { section: 'Watchtower Study', title: 'Cherish “the Privilege of Fearlessly Rendering Sacred Service”', time: '60 min', scriptures: ['Luke 1:69, 74'],
          kid: 'Zechariah praises Jehovah for a savior', words: ['ZECHARIAH', 'JOHN', 'SALVATION', 'SERVICE', 'PREACH', 'BRAVE', 'DAVID', 'GIFT'],
          points: ['The Gift of Salvation', 'The Privilege of Sacred Service', 'The Responsibility to Preach'] }
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
