// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navLinks').classList.remove('active');
        });
    });
});

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for reaching out! We\'ll get back to you soon and make your day even brighter!');
    event.target.reset();
}

// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
              observer.unobserve(entry.target); // animate only once
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.menu-item, .about-card, .gallery-item, .preview-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});




const menuData = {
  SparklingNectar: {
    title: 'Sparkling Nectar',
    subtitle: 'Yummy fruits and Flowers mixed with bubbly Water!',
    note: 'Add energy scoop for 50',
    items: [
      {
        name: 'Purple Haze',
        description: 'Lavender & Berries | Floral & Fruity \nSweetness: ⬤⬤〇〇〇\nBest for: Relaxation',
        priceSmall: '115',
        price: '129',
        badges: ['xstatic', 'Bestseller'],
        outOfStock: false
      },
      {
        name: 'Blockbuster',
        description: 'Popcorn & Cranberries | Bold & Theatrical \nSweetness: ⬤⬤⬤〇〇 \nBest for: Adventure seekers',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try','xstatic'],
        outOfStock: false

      },
      {
        name: 'Palom',
        description: 'Coffee, Ginger & Cranberry | Energizing & Bold \nSweetness: ⬤⬤⬤〇〇\nBest for: Coffee lovers | Energy Boost',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try', 'Unique'],
        outOfStock: false
      },
      {
        name: 'After Lunch',
        description: 'Fennel, Lime, Cumin | Cooling & Soothing\nSweetness: ⬤⬤〇〇〇\nBest for: Digestion | After heavy meals',
        priceSmall: '115',
        price: '129',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Sparkling Sea',
        description: 'Kiwi, Mint & Lemon | Icy Minty Burst \nTangy Sweetness: ⬤⬤⬤〇〇\nBest for: Refreshment',
        priceSmall: '89',
        price: '99',
        badges: ['Bestseller'],
        outOfStock: false
      },
      {
        name: 'Starlight',
        description: 'Litchi, Mint & Lemon | Icy Minty Burst \nSweetness: ⬤⬤⬤⬤〇\nBest for: Refreshment',
        priceSmall: '89',
        price: '99',
        badges: ['Bestseller','xstatic'],
        outOfStock: false
      },
      {
        name: 'Rio',
        description: 'Guava, Chilly & Mint | spicy-cool contrast \nSweetness: ⬤⬤⬤〇〇 \nBest for: Spice lovers',
        priceSmall: '89',
        price: '99',
        badges: ['Must Try', 'xstatic'],
        outOfStock: false
      },
      {
        name: 'Margarita',
        description: 'Peach& Salt | Vibrant & Salty\nSweetness: ⬤⬤⬤〇〇 \nBest for: Shikanji Lovers',
        priceSmall: '89',
        price: '99',
        badges: ['xstatic'],
        outOfStock: false},
      {
        name: 'Cinderella',
        description: 'Peach& Salt | Vibrant & Salty\nSweetness: ⬤⬤⬤⬤⬤ \nBest for: Shikanji Lovers',
        priceSmall: '89',
        price: '99',
        badges: ['Bestseller','xstatic'],
        outOfStock: false
      },
      {
        name: 'Pinacolada',
        description: 'Pineapple & Coconut | Fizzy Beach Escape \nSweetness: ⬤⬤⬤⬤〇 \nBest for: Vacation feels',
        priceSmall: '89',
        price: '99',
        badges: ['Bestseller','xstatic'],
        outOfStock: false
      },
      {
        name: 'GrassHopper',
        description: 'Green Apple & Ginger | Jungle Adventure \nSweetness: ⬤⬤〇〇〇 \nBest for: Tangy lovers',
        priceSmall: '89',
        price: '99',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Water Baloon',
        description: 'Watermelon, Orange, Mint | Summer Vibes\nSweetness: ⬤⬤⬤〇〇 \nBest for: kid-at-heart',
        priceSmall: '89',
        price: '99',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Lotus',
        description: 'Litchi & Rose | Elegant & Romantic \nSweetness: ⬤⬤⬤⬤⬤\nBest for: Minimalists & romantics',
        priceSmall: '89',
        price: '79',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Forest',
        description: 'Cucumber, Lime & Salt | Ultra-Hydrating \nSweetness: ⬤⬤⬤〇〇\nBest for: Detox vibes',
        priceSmall: '79',
        price: '89',
        badges: ['xstatic'],
        outOfStock: false
      },
      
      {
        name: 'Sunshine',
        description: 'Lime & Tea | Tangy and Smooth\nSweetness: ⬤⬤⬤〇〇 \nBest for: Chai Lovers',
        priceSmall: '79',
        price: '89',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Martini',
        description: 'Ginger & Lemon | Sophisticated & Clean \nSweetness: ⬤〇〇〇〇 \nBest for: Chai lovers who want fizz',
        priceSmall: '79',
        price: '89',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Ice Tea',
        description: 'Lime & Tea | Tangy and Smooth\nSweetness: ⬤⬤⬤〇〇 \nBest for: Chai Lovers',
        priceSmall: '69',
        price: '79',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Virgin Mojito',
        description: 'lemon & Mint. | Tangy and Sweet\nSweetness: ⬤⬤⬤〇〇 \nBest for: Nimbu Pani Enthusiastic',
        priceSmall: '59',
        price: '79',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Iced Americano',
        description: 'Black Coffee on the rocks \nSweetness: 〇〇〇〇〇' ,
        priceSmall: '119',
        price: '139',
        badges: ['Healthy'],
        outOfStock: false
      },
      {
        name: 'Sparkling Strawberries',
        description: 'Crushed Strawberries in sparkling water \nSweetness: ⬤⬤⬤⬤⬤',
        priceSmall: '89',
        price: '99'
      },
      {
        name: 'Sparkling Blueberries',
        description: 'Crushed Blueberries in sparkling water \nSweetness: ⬤⬤〇〇〇',
        priceSmall: '89',
        price: '99'
      }
    ]
  },
  MilkyNectar: {
    title: 'Milky Nectar',
    subtitle: 'Cremmy drinks made with Fruits, Spices & Milk',
    note: 'Add Protine scoop for 70',
    items: [
      {
        name: 'Chocolate Protein',
        description: 'HEALTHY Chocolate & Protein blend | Post-workout treat \nSweetness: ⬤⬤⬤〇〇 \nBest for: Fitness enthusiasts & choco-lovers',
        priceSmall: '199',
        price: '299',
        badges: ['Healthy'],
        outOfStock: false
      },
      {
        name: 'Almond Spice',
        description: 'Almond milk with warming spices Fat-loss friendly spiced delight \nNutty & aromatic \nSweetness: ⬤〇〇〇〇 \nBest for: Calorie Conscious',
        priceSmall: '249',
        price: '349',
        badges: ['Healthy'],
        outOfStock: false
      },
      {
        name: 'Liquid Diet',
        description: 'Multi-grain nut powerhouse meal in a glass | Filling & nutritious \nSweetness: ⬤⬤〇〇〇 \nBest for: Weight Gainer',
        priceSmall: '149',
        price: '199',
        badges: ['Healthy'],
        outOfStock: false
      },
      {
        name: 'Pailwan',
        description: 'Traditional energy drink with extra strength | Creamy indulgence \nSweetness: ⬤⬤⬤⬤〇 \nBest for: Festive vibes & Strength',
        priceSmall: '149',
        price: '199',
        badges: ['Healthy'],
        outOfStock: false
      },
      {
        name: 'Redvelvet',
        description: 'Strawberries & Red Velvet Essence | Decadent & dreamy \nSweetness: ⬤⬤⬤〇〇 \nBest for: Dessert lovers',
        priceSmall: '135',
        price: '149',
        badges: ['Bestseller','xstatic'],
        outOfStock: false
      },
      {
        name: 'Blueberry Cheese',
        description: 'Blueberries & Cheesecake | Rich & tangy \nSweetness: ⬤⬤⬤⬤〇 \nBest for: Cheesecake fans',
        priceSmall: '135',
        price: '149',
        badges: ['Bestseller','xstatic'],
        outOfStock: false
      },
      {
        name: 'MangoVelvet',
        description: 'Mangoes & Velvet cake Essence | Tropical indulgence \nSweetness: ⬤⬤⬤⬤〇 \nBest for: Mango season lovers',
        priceSmall: '135',
        price: '149',
        badges: ['Must Try','xstatic'],
        outOfStock: false
      },
      {
        name: 'Specialty Iced latte',
        description: 'Freshly brewed specialty Arabica beans | Smooth & strong \nBitterness: ⬤⬤〇〇〇 \nBest for: Coffee purists',
        priceSmall: '135',
        price: '149',
        badges: ['Bestseller','xstatic'],
        outOfStock: false
      },
      {
        name: 'Creamy crust',
        description: 'Custard Apple with Vanilla cream | Smooth & delicate \nSweetness: ⬤⬤⬤〇〇 \nBest for: Custard apple lovers',
        priceSmall: '119',
        price: '139',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Berry Pop',
        description: 'Mixed Berries & popcorn | Fun & fruity\nSweetness: ⬤⬤⬤⬤〇 \nBest for: Playful taste adventurers',
        priceSmall: '109',
        price: '129',
        badges: ['Must Try','xstatic'],
        outOfStock: false
      },
      {
        name: 'Black Pink',
        description: 'Straw Berries & Chocolate | Bold & beautiful \nSweetness: ⬤⬤⬤⬤〇 \nBest for: Chocolate-berry combo fans',
        priceSmall: '109',
        price: '129',
        badges: ['Bestseller', 'xstatic'],
        outOfStock: false
      },
      {
        name: 'Ice Spice',
        description: 'Real milk spices with subtle sweetness | Warming & comforting \nSweetness: ⬤⬤〇〇〇 \nBest for: Traditional spice lovers',
        priceSmall: '99',
        price: '119',
        badges: ['Must Try','xstatic'],
        outOfStock: false
      },
      {
        name: 'Midnight Moca',
        description: 'Coffee, Blueberry & Chocolatey | Rich & mysterious \nSweetness: ⬤⬤⬤〇〇 \nBest for: Coffee lovers wanting fruity twist',
        priceSmall: '99',
        price: '119',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'FuK Matcha',
        description: 'Moringa & Milk  |  Bold & Sweet\nSweetness: ⬤⬤〇〇〇\nBest for: Matcha Lovers & Haters\nFlavor options :  Chocolate  Coffee  Vanilla  Caramel  Hazelnut',
        priceSmall: '99',
        price: '119',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Pink Candy',
        description: 'Litchi with Berries | Sweet & Tangy \nSweetness: ⬤⬤⬤⬤〇 \nBest for: Sweet tooths',
        priceSmall: '99',
        price: '119',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'BubbleGum',
        description: 'Nostalgic Boomer Flavor | Sweet & playful \nSweetness: ⬤⬤⬤⬤〇\nBest for: Boomer Lover',
        priceSmall: '99',
        price: '119',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Mudpie',
        description: 'mud of Chocolate heaven | Thick & indulgent \nSweetness: ⬤⬤⬤⬤〇 \nBest for: Chocolate lovers',
        priceSmall: '89',
        price: '99',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Coffee velvet',
        description: 'Velvety Coffee with sweetness Smooth & silk \nSweetness: ⬤⬤⬤〇〇 \nBest for: Classic coffee shake fans\nFlavor options: Vanilla   Caramel   Hazelnut',
        priceSmall: '79',
        price: '89',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Biscoff',
        description: 'Crushed Lotus Biscoff  | Cookie Haven\nSweetness: ⬤⬤⬤⬤〇\nBest for: Cookie lovers & indulgers\nFlavor options : Chocolate Coffee Vanilla Caramel Hazelnut',
        priceSmall: '149',
        price: '199',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Stardust',
        description: 'Smooth milky vanilla | Simple & timeless \nSweetness: ⬤⬤⬤〇〇 \nBest for: Minimalist',
        priceSmall: '119',
        price: '139',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Milky Strawberries',
        description: 'Pure strawberry goodness | Sweet & fruity \nSweetness: ⬤⬤⬤〇〇 \nBest for: Strawberry milk fans',
        priceSmall: '119',
        price: '139',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'MIlky Blueberries',
        description: 'Pure Blueberries goodness | Tangy & fruity \nSweetness: ⬤⬤⬤〇〇 \nBest for: Blueberries milk fans',
        priceSmall: '119',
        price: '139',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Moca',
        description: 'Chocolate & Coffee | Creamy & delicious \nSweetness:  ⬤⬤〇〇〇 \nBest for: Classic combo lovers',
        priceSmall: '99',
        price: '119',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Iced Cocoa',
        description: 'Cocoa with milk | Dark & creamy\nSweetness: ⬤〇〇〇〇 \nBest for: Dark Chocolate Fans',
        priceSmall: '99',
        price: '119',
        badges: ['xstatic'],
        outOfStock: false
      }
    ]
  },
  WarmNectar: {
    title: 'Warm Nectar',
    subtitle: '(Hot drinks)',
    items: [
      {
        name: 'Pink Chai',
        description: 'Kawa, Spices & Nuts Same emotion, different color\nUnique & aromatic \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Chai lovers',
        priceSmall: '99',
        price: '119',
        badges: ['Bestseller', 'xstatic'],
        outOfStock: false
      },
      {
        name: 'Specialty Coffee',
        description: 'freshly brewed specialty Arabica beans\nSmooth & strong \nBitterness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Coffee purists',
        priceSmall: '129',
        price: '149',
        badges: ['Bestseller'],
        outOfStock: false
      },
      {
        name: 'Blueberry Mocha',
        description: 'Melted Chocolate with Berry surprise Delightful choco-berry warmth\nFun & indulgent Sweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Hot chocolate with a twist',
        priceSmall: '99',
        price: '119',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Hot Chocolate',
        description: 'Melted Chocolate Milk Classic comfort in a cup \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Chocolate warmth seekers\nChoose: Vanilla/ Hazelnut/ Caramel ',
        priceSmall: '89',
        price: '109',
        badges: ['Bestseller'],
        outOfStock: false
      },
      {
        name: 'Wildroot',
        description: 'erbal heat with ginger kick Warm, \nspicy & unapologetically bold | Healing & energizing \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Immunity boost & spice lovers',
        priceSmall: '59',
        price: '79',
        badges: ['Must Try','Healthy'],
        outOfStock: false
      },
      {
        name: 'Masala Chai',
        description: 'Authentic Indian chai with spices Traditional tea perfection\nWarm & comforting \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Classic chai enthusiasts',
        priceSmall: '69',
        price: '89',
        badges: ['xstatic'],
        outOfStock: false
      },
      {
        name: 'Detox',
        description: 'Calming fennel (saunf) drink Soothing digestive night drink\nLight & refreshing \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: After-dinner relaxation',
        priceSmall: '59',
        price: '69',
        badges: ['Healthy'],
        outOfStock: false
      },
      {
        name: 'Specialty Black Coffee',
        description: 'freshly brewed specialty Arabica beans \nSmooth & strong \nBitterness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Coffee purists',
        priceSmall: '119',
        price: '139',
        badges: ['Healthy'],
        outOfStock: false
      },
      {
        name: 'Instant Coffee',
        description: 'Simply milk coffee\nFast & familiar \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Roadside Coffee Lover',
        priceSmall: '59',
        price: '79',
        badges: [''],
        outOfStock: false
      },
      {
        name: 'Instant Black Coffee',
        description: 'Simply milk coffee\nFast & familiar \nSweetness: ⬤⬤⬤⬤〇〇〇〇\nBest for: Roadside Coffee Lover',
        priceSmall: '59',
        price: '79',
        badges: [''],
        outOfStock: false

      }
    ]
  },
  Snacks: {
    title: 'Snacks',
    items: [
      {
        name: 'Frozen Cheescake',
        price: '189',
        // badges: ['xstatic'],
        outOfStock: false

      },
      {
        name: 'Cookie (4pcs)',
        price: '99',
        // badges: ['xstatic'],
        outOfStock: false

      },
      {
        name: 'Penut Butter Toast (2pcs)',
        price: '99',
        // badges: ['xstatic'],
        outOfStock: false

      },
      {
        name: 'Popped Lotus Seeds',
        price: '159',
        // badges: ['xstatic'],
        outOfStock: false

      },
      {
        name: 'Nut Mix',
        price: '109',
        // badges: ['xstatic'],
        outOfStock: false
      }
    ]
  }
};

    const menuRoot = document.getElementById('menu-root');
    const tagFilterRoot = document.getElementById('tag-filter-root');

    const categoryOrder = ['SparklingNectar', 'MilkyNectar', 'WarmNectar', 'Snacks'];
    const tagPriority = ['Best Seller', 'xstatic', 'New', 'Refreshing', 'Sweet', 'Unique', 'Healthy'];
    const selectedTags = new Set();

    const badgeSlug = (badge) => {
      const normalized = normalizeBadgeLabel(badge).toLowerCase();
      if (normalized === 'xstatic') return 'musttry';
      if (normalized === 'best seller') return 'bestseller';
      return normalized.replace(/\s+/g, '-');
    };
    const normalizeBadgeLabel = (badge) => {
      const text = String(badge || '').trim();
      if (!text) return '';
      const normalized = text.toLowerCase();
      if (normalized === 'xstatic' || normalized === 'must-try') return 'xstatic';
      if (normalized === 'bestseller' || normalized === 'best seller' || normalized === 'best-seller') return 'Best Seller';
      if (normalized === 'new') return 'New';
      if (normalized === 'refreshing') return 'Refreshing';
      if (normalized === 'sweet') return 'Sweet';
      if (normalized === 'unique') return 'Unique';
      if (normalized === 'healthy') return 'Healthy';
      return text
        .split(/\s+/)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join(' ');
    };
    const includesAny = (text, words) => words.some((word) => text.includes(word));

    const getIngredientSource = (item) => {
      const explicitIngredients = Array.isArray(item.ingredients)
        ? item.ingredients.join(' ')
        : (item.ingredients || '');
      const primaryDescription = String(item.description || '')
        .split('\n')[0]
        .split('|')[0];
      return `${explicitIngredients} ${primaryDescription}`.toLowerCase();
    };

    const inferBadges = (item) => {
      const result = [];
      const add = (label) => {
        if (!result.includes(label)) result.push(label);
      };
      const ingredientText = getIngredientSource(item);

      (item.badges || []).forEach((badge) => {
        const label = normalizeBadgeLabel(badge);
        if (label) add(label);
      });

      if (includesAny(ingredientText, ['mint', 'lemon', 'lime', 'cucumber', 'watermelon', 'kiwi', 'orange', 'fennel'])) add('Refreshing');
      if (includesAny(ingredientText, ['chocolate', 'caramel', 'vanilla', 'strawberry', 'berries', 'berry', 'mango', 'litchi', 'rose', 'cookie', 'biscoff', 'custard', 'pineapple'])) add('Sweet');
      if (includesAny(ingredientText, ['lavender', 'popcorn', 'fennel', 'cumin', 'moringa', 'ginger', 'spices'])) add('Unique');
      if (includesAny(ingredientText, ['protein', 'coffee', 'arabica', 'cocoa'])) add('xstatic');
      if (includesAny(ingredientText, ['protein', 'almond', 'moringa', 'fennel', 'nuts', 'nut', 'multigrain', 'detox', 'ginger'])) add('Healthy');

      const prioritized = tagPriority.filter((label) => result.includes(label));
      const extras = result.filter((label) => !tagPriority.includes(label));
      return [...prioritized, ...extras];
    };

    const createMenuItem = (item) => {
      const card = document.createElement('article');
      card.className = `menu-item ${item.outOfStock ? 'out-of-stock' : ''}`;
      const autoBadges = inferBadges(item);
      card.dataset.tags = autoBadges.map((badge) => badgeSlug(badge)).join(' ');

      const imageSrc = item.name
        ? `./assets/images/Doddel Drinks/${encodeURIComponent(item.name)}.jpg`
        : null;

      if (imageSrc) {
        const media = document.createElement('div');
        media.className = 'menu-item-media';

        if (autoBadges.length || item.outOfStock) {
          card.classList.add('has-badges');

          const header = document.createElement('div');
          header.className = 'menu-item-header';

          const badges = document.createElement('div');
          badges.className = 'menu-badges';

          if (item.outOfStock) {
            const out = document.createElement('span');
            out.className = 'badge out-of-stock';
            out.innerHTML = '<span class="badge-text">Out of stock</span>';
            badges.appendChild(out);
          }

          autoBadges.forEach((badge) => {
            const tag = document.createElement('span');
            tag.className = `badge badge-${badgeSlug(badge)}`;
            tag.innerHTML = `<span class="badge-text">${badge}</span>`;
            badges.appendChild(tag);
          });

          header.appendChild(badges);
          card.appendChild(header);
        }

        const photo = document.createElement('div');
        photo.className = 'menu-item-photo';
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = item.name || 'Menu item';
        img.loading = 'lazy';
        photo.appendChild(img);
        media.appendChild(photo);
        card.appendChild(media);
      }

      const body = document.createElement('div');
      body.className = 'menu-item-body';

      const content = document.createElement('div');
      content.className = 'menu-item-content';

      const title = document.createElement('h3');
      title.textContent = item.name || '';
      content.appendChild(title);

      if (item.description) {
        const desc = document.createElement('p');
        desc.className = 'menu-item-description';
        desc.textContent = String(item.description).replace(/\\n/g, '\n');
        content.appendChild(desc);
      }

      const prices = document.createElement('div');
      prices.className = 'menu-item-prices';

      if (item.priceSmall) {
        const mini = document.createElement('div');
        mini.className = 'price-block price-mini';
        mini.innerHTML = `<span class="price-amount">${item.priceSmall}</span><span class="price-label">For kids</span>`;
        prices.appendChild(mini);
      }

      if (item.price) {
        const regular = document.createElement('div');
        regular.className = 'price-block price-regular';
        regular.innerHTML = `<span class="price-amount price-large">${item.price}</span><span class="price-label">For Adults</span>`;
        prices.appendChild(regular);
      }

      content.appendChild(prices);
      body.appendChild(content);
      card.appendChild(body);

      return card;
    };

    const getAllUsedTags = () => {
      const used = new Set();
      categoryOrder.forEach((key) => {
        const category = menuData[key];
        if (!category) return;
        (category.items || []).forEach((item) => {
          inferBadges(item).forEach((badge) => used.add(badge));
        });
      });
      const prioritized = tagPriority.filter((tag) => used.has(tag));
      const extras = Array.from(used)
        .filter((tag) => !tagPriority.includes(tag))
        .sort((a, b) => a.localeCompare(b));
      return [...prioritized, ...extras];
    };

    // const applyTagFilters = () => {
    //   const activeTags = Array.from(selectedTags);
    //   const hasActive = activeTags.length > 0;

    //   document.querySelectorAll('.menu-item').forEach((card) => {
    //     const itemTags = (card.dataset.tags || '').split(' ').filter(Boolean);
    //     // const matches = !hasActive || itemTags.some((tag) => selectedTags.has(tag));
    //     const matches = !hasActive || Array.from(selectedTags).every((tag) => itemTags.includes(tag));
    //     card.style.display = matches ? '' : 'none';
    //   });

    //   document.querySelectorAll('.menu-category').forEach((section) => {
    //     const items = section.querySelectorAll('.menu-item');
    //     const hasVisible = Array.from(items).some((item) => item.style.display !== 'none');
    //     section.style.display = hasVisible ? '' : 'none';

    //     if (hasActive && hasVisible) {
    //       const toggle = section.querySelector('.category-toggle');
    //       const content = section.querySelector('.category-content');
    //       const chevron = section.querySelector('.category-chevron');
    //       content.classList.add('open');
    //       chevron.classList.add('open');
    //       toggle.setAttribute('aria-expanded', 'true');
    //     }
    //   });
    // };

    const applyTagFilters = () => {
  const activeTags = Array.from(selectedTags);
  const hasActive = activeTags.length > 0;

  document.querySelectorAll('.menu-category').forEach((section) => {
    const grid = section.querySelector('.menu-grid');
    const cards = Array.from(section.querySelectorAll('.menu-item'));

    if (!hasActive) {
      // Reset display and original order
      cards.forEach(card => {
        card.style.display = '';
        card.style.order = '';
      });
      section.style.display = '';
      return;
    }

    const scored = [];

    cards.forEach(card => {
      const itemTags = (card.dataset.tags || '').split(' ').filter(Boolean);

      // Count how many selected tags match
      const matchCount = activeTags.filter(tag => itemTags.includes(tag)).length;

      if (matchCount > 0) {
        scored.push({ card, matchCount });
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });

    // Sort by highest match count first
    scored.sort((a, b) => b.matchCount - a.matchCount);

    // Reorder visually
    scored.forEach((item, index) => {
      item.card.style.order = index;
    });

    const hasVisible = scored.length > 0;
    section.style.display = hasVisible ? '' : 'none';

    if (hasVisible) {
      const toggle = section.querySelector('.category-toggle');
      const content = section.querySelector('.category-content');
      const chevron = section.querySelector('.category-chevron');

      content.classList.add('open');
      chevron.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
};


    const renderTagFilters = () => {
      const tags = getAllUsedTags();
      if (!tags.length) return;

      const wrap = document.createElement('div');
      wrap.className = 'tag-filter-wrap';

      const label = document.createElement('p');
      label.className = 'tag-filter-label';
      label.textContent = 'Filter by tags';
      wrap.appendChild(label);

      const list = document.createElement('div');
      list.className = 'tag-filter-list';

      const chips = [];
      const makeChip = (text, slug, isAll = false) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = `tag-filter-chip${isAll ? ' active' : ''}`;
        chip.dataset.tag = slug;
        chip.textContent = text;
        chips.push(chip);
        list.appendChild(chip);
      };

      makeChip('All', 'all', true);
      tags.forEach((tag) => makeChip(tag, badgeSlug(tag)));

      const syncChipState = () => {
        chips.forEach((chip) => {
          const slug = chip.dataset.tag;
          if (slug === 'all') {
            chip.classList.toggle('active', selectedTags.size === 0);
          } else {
            chip.classList.toggle('active', selectedTags.has(slug));
          }
        });
      };

      list.addEventListener('click', (event) => {
        const chip = event.target.closest('.tag-filter-chip');
        if (!chip) return;
        const slug = chip.dataset.tag;

        if (slug === 'all') {
          selectedTags.clear();
        } else if (selectedTags.has(slug)) {
          selectedTags.delete(slug);
        } else {
          selectedTags.add(slug);
        }

        syncChipState();
        applyTagFilters();
      });

      wrap.appendChild(list);
      tagFilterRoot.innerHTML = '';
      tagFilterRoot.appendChild(wrap);
    };

    const createCategory = (category) => {
      const wrap = document.createElement('section');
      wrap.className = 'menu-category';

      const toggle = document.createElement('button');
      toggle.className = 'category-toggle';
      toggle.type = 'button';
      toggle.setAttribute('aria-expanded', 'false');

      const title = document.createElement('h3');
      title.className = 'category-title';

      const titleRow = document.createElement('span');
      titleRow.className = 'category-title-row';

      const titleText = document.createElement('span');
      titleText.textContent = category.title || '';
      titleRow.appendChild(titleText);

      const chevron = document.createElement('span');
      chevron.className = 'category-chevron';
      chevron.setAttribute('aria-hidden', 'true');
      chevron.textContent = '▾';

      titleRow.appendChild(chevron);
      title.appendChild(titleRow);
      let subtitle = null;

      if (category.subtitle) {
        subtitle = document.createElement('span');
        subtitle.className = 'category-subtitle';
        subtitle.textContent = category.subtitle;
        title.appendChild(subtitle);
      }
      toggle.appendChild(title);

      const content = document.createElement('div');
      content.className = 'category-content';

      if (category.note) {
        const note = document.createElement('p');
        note.className = 'category-note';
        note.textContent = category.note;
        content.appendChild(note);
      }

      const grid = document.createElement('div');
      grid.className = 'menu-grid';
      (category.items || []).forEach((item) => grid.appendChild(createMenuItem(item)));
      content.appendChild(grid);

      toggle.addEventListener('click', () => {
        const open = content.classList.toggle('open');
        chevron.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));

  // Hide subtitle when open
        if (subtitle) {
          // subtitle.style.display = open ? 'none' : 'block';
           subtitle.classList.toggle('hidden', open);
          }
      });

      wrap.appendChild(toggle);
      wrap.appendChild(content);
      return wrap;
    };

    if (menuRoot && tagFilterRoot) {
      categoryOrder.forEach((key) => {
        if (menuData[key]) {
          menuRoot.appendChild(createCategory(menuData[key]));
        }
      });

      renderTagFilters();
      applyTagFilters();

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // animate only once
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

      document.querySelectorAll('.menu-item').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = `
          opacity 0.8s cubic-bezier(.4,0,.2,1),
          transform 0.8s cubic-bezier(.4,0,.2,1)
        `;
        el.style.transitionDelay = `${index * 60}ms`; // stagger effect
        observer.observe(el);
      });
    }


// Premium Motion Engine for Xstacy

const motion = {
  mouseX: 0,
  mouseY: 0,
  currentX: 0,
  currentY: 0,
  speed: 0.07,
  objects: document.querySelectorAll('.float-object'),
  canAnimate: !window.matchMedia('(prefers-reduced-motion: reduce)').matches && window.matchMedia('(pointer:fine)').matches && window.innerWidth > 768
};

if (motion.canAnimate && motion.objects.length) {
  document.addEventListener('mousemove', (event) => {
    motion.mouseX = (event.clientX - window.innerWidth / 2) / window.innerWidth;
    motion.mouseY = (event.clientY - window.innerHeight / 2) / window.innerHeight;
  });

  const animateMotion = () => {
    motion.currentX += (motion.mouseX - motion.currentX) * motion.speed;
    motion.currentY += (motion.mouseY - motion.currentY) * motion.speed;

    motion.objects.forEach((obj) => {
      const depth = parseFloat(getComputedStyle(obj).getPropertyValue('--depth')) || 16;
      const moveX = motion.currentX * depth;
      const moveY = motion.currentY * depth;
      obj.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });

    requestAnimationFrame(animateMotion);
  };

  animateMotion();
}

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section, .about-card, .preview-card, .gallery-item, .info-card, .story-content, .section-title');
  if (!sections.length) return;

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  sections.forEach((el) => {
    el.classList.add('reveal-on-scroll');
    revealObserver.observe(el);
  });
});
