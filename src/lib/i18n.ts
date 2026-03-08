export const locales = ["en", "hi", "es", "fr", "de", "ar", "ur"];

const deepMerge = (target: any, source: any) => {
    const output = { ...target };
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    output[key] = source[key];
                } else {
                    output[key] = deepMerge(target[key], source[key]);
                }
            } else {
                output[key] = source[key];
            }
        });
    }
    return output;
};

const isObject = (item: any) => {
    return (item && typeof item === 'object' && !Array.isArray(item));
};

export async function getMessages(locale: string) {
    try {
        // Load English as base
        const enMessages = (await import(`../messages/en.json`)).default;

        if (!locale || locale === 'en' || !locales.includes(locale)) {
            return enMessages || {};
        }

        try {
            // Load target language
            const langMessages = (await import(`../messages/${locale}.json`)).default;
            if (!langMessages) return enMessages || {};

            // Merge into English base
            return deepMerge(enMessages, langMessages) || enMessages || {};
        } catch (e) {
            // If target language fails, fallback to English
            return enMessages || {};
        }
    } catch (criticalError) {
        // Absolute fallback (should never happen if en.json exists)
        return {};
    }
}
