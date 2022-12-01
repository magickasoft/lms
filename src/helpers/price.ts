export const getPrices = (priceId: number) => {
  const prices = {
    0: {rub: 1, usd: 0.2, apple: 'course_tier_0', google: 'google_tier_0'},
    6: {rub: 499, usd: 5.99, apple: 'course_tier_6', google: 'google_tier_6'},
    8: {rub: 749, usd: 7.99, apple: 'course_tier_8', google: 'google_tier_8'},
    10: {rub: 699, usd: 9.99, apple: 'course_tier_10', google: 'google_tier_10'},
    11: {rub: 999, usd: 10.99, apple: 'course_tier_11', google: 'google_tier_11'},
    13: {rub: 1190, usd: 12.99, apple: 'course_tier_13', google: 'google_tier_13'},
    16: {rub: 1490, usd: 15.99, apple: 'course_tier_16', google: 'google_tier_16'},
    19: {rub: 1750, usd: 18.99, apple: 'course_tier_19', google: 'google_tier_19'},
    22: {rub: 1990, usd: 21.99, apple: 'course_tier_22', google: 'google_tier_22'},
    32: {rub: 2990, usd: 31.99, apple: 'course_tier_32', google: 'google_tier_32'},
    43: {rub: 3990, usd: 42.99, apple: 'course_tier_43', google: 'google_tier_43'},
    51: {rub: 4990, usd: 54.99, apple: 'course_tier_51', google: 'google_tier_51'},
    55: {rub: 6990, usd: 74.99, apple: 'course_tier_55', google: 'google_tier_55'},
    59: {rub: 8990, usd: 94.99, apple: 'course_tier_59', google: 'google_tier_59'},
    81: {rub: 39990, usd: 449.99, apple: 'apple_courses_forever', google: 'google_courses_forever', sd: 648.98},
    82: {rub: 1750, usd: 19, apple: 'course_tier_82', google: 'google_tier_82'},
  };

  return prices[priceId] ?? null;
};
