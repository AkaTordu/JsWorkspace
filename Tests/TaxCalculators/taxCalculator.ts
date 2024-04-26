export function calculateVAT(amount: number, rate: number): number | string {
    if (rate < 0) {
        return "La TVA ne peut pas être négative.";
    }
    if (amount < 0) {
        return "Le montant ne peut pas être négatif.";
    }
    return amount * (rate / 100);
}

export function calculatePriceIncludingVAT(basePrice: number, rate: number): number | string {
    if (rate < 0) {
        return "La TVA ne peut pas être négative.";
    }
    if (basePrice < 0) {
        return "Le montant ne peut pas être négatif.";
    }
    return basePrice * (1 + rate / 100);
}