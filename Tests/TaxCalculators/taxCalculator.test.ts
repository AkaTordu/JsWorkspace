import { calculateVAT } from './taxCalculator';
import { calculatePriceIncludingVAT } from './taxCalculator';

describe('calculateVAT', () => {
    test('calculates 20% VAT correctly', () => {
        expect(calculateVAT(100, 20)).toBe(20);
    });

    test('calculates 5% VAT on a different amount correctly', () => {
        expect(calculateVAT(200, 5)).toBe(10);
    });

    test('returns 0 when the VAT rate is 0', () => {
        expect(calculateVAT(100, 0)).toBe(0);
    });

    test('returns a message if the VAT rate is negative', () => {
        expect(calculateVAT(100, -20)).toBe("La TVA ne peut pas être négative.");
    });

    test('returns a message if the amount is negative', () => {
        expect(calculateVAT(-100, 20)).toBe("Le montant ne peut pas être négatif.");
    });
});

describe('calculatePriceIncludingVAT', () => {
    test('calculates the total price correctly when VAT is 20%', () => {
        expect(calculatePriceIncludingVAT(100, 20)).toBe(120);
    });
    
    test('calculates the total price correctly when VAT is 0%', () => {
        expect(calculatePriceIncludingVAT(100, 0)).toBe(100);
    });

    test('calculates the total price correctly when VAT is 5%', () => {
        expect(calculatePriceIncludingVAT(100, 5)).toBe(105);
    });
});