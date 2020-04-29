export default {
    name: "icao_doc_9303",
    description: "ICAO DOC 9303 transliteration schema",
    url: "https://dangry.ru/iuliia/icao-doc-9303/",
    mapping: {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "e",
        ж: "zh",
        з: "z",
        и: "i",
        й: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "ts",
        ч: "ch",
        ш: "sh",
        щ: "shch",
        ъ: "ie",
        ы: "y",
        ь: "",
        э: "e",
        ю: "iu",
        я: "ia",
    },
    prev_mapping: null,
    next_mapping: null,
    ending_mapping: null,
    samples: [
        [
            "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
            "Iuliia, sieesh eshche etikh miagkikh frantsuzskikh bulok iz Ioshkar-Oly, da vypei altaiskogo chaiu",
        ],
        ["Юлия Щеглова", "Iuliia Shcheglova"],
        ["Гайа Васильева", "Gaia Vasileva"],
        ["Андрей Видный", "Andrei Vidnyi"],
        ["Артём Краевой", "Artem Kraevoi"],
        ["Мадыр Чёткий", "Madyr Chetkii"],
        ["Оксана Клеёнкина", "Oksana Kleenkina"],
        ["Игорь Ильин", "Igor Ilin"],
        ["Ян Разъездной", "Ian Razieezdnoi"],
    ],
};