let vegitable = ['양상추', '토마토', '피클'];
let meat = ['불고기'];
let meatBurger = vegitable.concat(meat, '빵');
meatBurger; // ["양상추", "토마토", "피클", "불고기", "빵"]
let meatBurger2 = meat.concat('빵', vegitable);
meatBurger2; // ["불고기", "빵", "양상추", "토마토", "피클"]
