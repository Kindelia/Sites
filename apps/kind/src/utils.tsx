export function convertBase64ToText(base64: string) {
    return Buffer.from(base64, 'base64').toString('utf8');
}