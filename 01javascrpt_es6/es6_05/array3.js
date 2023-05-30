let vegitable = ['양상추', '토마토', '피클'];
let cheese = ['모짜렐라', '슈레드'];
let cheeseBurger = ['빵', ...vegitable, ...cheese];
cheeseBurger; // ["빵", "양상추", "토마토", "피클", "모짜렐라", "슈레드"]
