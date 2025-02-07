function GetImogi(text) {
    const keywordCategories = {
        '🕌': [
            "namaj", "prayer", "salat", "allah", "muslim", "islamic", "worship",
            "faith", "masjid", "mosque", "imam", "adhan", "salah", "tahajjud",
            "jummah", "mihrab", "minaret", "qibla", "rak'ah", "sajda", "sujud",
            "wudu", "zakat", "sadaqah", "hajj", "umrah"
        ],
        '📖': [
            "quran", "read", "study", "hadis", "book", "verse", "ayat",
            "surah", "recitation", "tafsir", "scripture"
        ],
        '🤲': [
            "dua", "supplication", "pray", "invocation", "mercy", "blessing",
            "forgiveness", "guidance"
        ],
        '🌙': [
            "fasting", "roja", "iftar", "sehri", "eid", "ramadan", "moon",
            "crescent", "hilal", "taraweeh", "suhur", "eid mubarak",
            "eid ul fitr", "eid ul adha", "laylat al-qadr", "ramadhan",
            "ramzan", "ramazan", "ramadhan kareem", "ramadan kareem"
        ],
        '👨‍💻': [
            "work", "job", "task", "coding", "project", "office", "development",
            "programming", "software", "engineering", "design", "debug", "algorithm"
        ],
        '📊': ["meeting", "call", "presentation", "stats", "data", "excel", "report"],
        '🏋️': ["gym", "weight", "exercise", "strength", "fitness", "lift"],
        '🚴': ["bike", "cycle", "cycling", "bicycle", "spinning"],
        '🧘': ["yoga", "meditation", "mindfulness", "breathing", "zen"],
        '📚': ["learn", "library", "research", "course", "knowledge"],
        '🏫': ["school", "university", "college", "class", "exam", "teacher"],
        '✏️': ["write", "essay", "note", "draft", "homework", "edit"],
        '🎬': ["movie", "film", "actor", "director", "cinema", "scene"],
        '🎵': ["music", "guitar", "song", "playlist", "album", "concert", "piano"],
        '🎮': ["game", "gaming", "console", "player", "esports", "stream"],
        '☕': ["coffee", "tea", "break", "cafe", "latte", "cappuccino"],
        '🛍️': ["shop", "shopping", "store", "buy", "mall", "fashion"],
        '😴': ["sleep", "tired", "nap", "bed", "snore", "dream"],
        '💰': ["money", "cash", "salary", "income", "rich", "wealth"],
        '🏦': ["bank", "account", "loan", "credit", "mortgage", "interest"],
        '✈️': ["travel", "flight", "airport", "vacation", "luggage", "passport"],
        '🚗': ["car", "drive", "road", "highway", "vehicle", "commute"],
        '🏨': ["hotel", "resort", "checkin", "booking", "accommodation"],
        '📝': [] // Default category
    };

    const inputText = text.toLowerCase();
    for (const [emoji, keywords] of Object.entries(keywordCategories)) {
        if (keywords.some(keyword => inputText.includes(keyword))) {
            return emoji;
        }
    }
    return '📝'; // Default if no matches
}

export default GetImogi;