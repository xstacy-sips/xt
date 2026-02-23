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
        description: 'Lavender & Berries | Floral & Fruity \nSweetness: ⬤⬤⬤〇〇\nBest for: Relaxation',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try'],
        outOfStock: false
      },
      {
        name: 'Blockbuster',
        description: 'Popcorn & Cranberries | Bold & Theatrical \nSweetness: ⬤⬤⬤⬤〇〇 \nBest for: Adventure seekers',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Palom',
        description: 'Coffee, Ginger & Cranberry | Energizing & Bold \nSweetness: ⬤⬤⬤⬤〇〇〇〇\nBest for: Coffee lovers | Energy Boost',
        priceSmall: '115',
        price: '129',
        badges: ['Bestseller']
      },
      {
        name: 'After Lunch',
        description: 'Fennel, Lime, Cumin | Cooling & Soothing\nSweetness: ⬤⬤⬤⬤〇〇〇〇\nBest for: Digestion | After heavy meals',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Sparkling Sea',
        description: 'Kiwi, Mint & Lemon | Icy Minty Burst \nTangy Sweetness: ⬤⬤⬤⬤〇〇〇〇\nBest for: Refreshment',
        priceSmall: '89',
        price: '99'
      },
      {
        name: 'Starlight',
        description: 'Litchi, Mint & Lemon | Icy Minty Burst \nSweetness: ⬤⬤⬤⬤〇〇〇〇\nBest for: Refreshment',
        priceSmall: '89',
        price: '99'
      },
      {
        name: 'Rio',
        description: 'Guava, Chilly & Mint | spicy-cool contrast \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Spice lovers',
        priceSmall: '89',
        price: '99'
      },
      {
        name: 'Margarita',
        description: 'Peach& Salt | Vibrant & Salty\nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Shikanji Lovers',
        priceSmall: '89',
        price: '99'
      },
      {
        name: 'Cinderella',
        description: 'Peach& Salt | Vibrant & Salty\nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Shikanji Lovers',
        priceSmall: '89',
        price: '99'
      },
      {
        name: 'Pinacolada',
        description: 'Pineapple & Coconut | Fizzy Beach Escape \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Vacation feels',
        priceSmall: '89',
        price: '99'
      },
      {
        name: 'GrassHopper',
        description: 'Green Apple & Ginger | Jungle Adventure \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Tangy lovers',
        priceSmall: '89',
        price: '99'
      },
      {
        name: 'Water Baloon',
        description: 'Watermelon, Orange, Mint | Summer Vibes\nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: kid-at-heart',
        priceSmall: '89',
        price: '99'
      },
      {
        name: 'Lotus',
        description: 'Litchi & Rose | Elegant & Romantic \nSweetness: ⬤⬤⬤⬤〇〇〇〇\nBest for: Minimalists & romantics',
        priceSmall: '89',
        price: '99'
      },
      {
        name: 'Forest',
        description: 'Cucumber, Lime & Salt | Ultra-Hydrating \nSweetness: ⬤⬤⬤⬤〇〇〇〇\nBest for: Detox vibes',
        priceSmall: '89',
        price: '99'
      },
      {
        name: 'Ice Tea',
        description: 'Lime & Tea | Tangy and Smooth\nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Chai Lovers',
        priceSmall: '89',
        price: '99'
      },
      {
        name: 'Sunshine',
        description: 'Lime & Tea | Tangy and Smooth\nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Chai Lovers',
        priceSmall: '89',
        price: '99'
      },
      {
        name: 'Martini',
        description: 'Ginger & Lemon | Sophisticated & Clean \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Chai lovers who want fizz',
        priceSmall: '89',
        price: '99'
      },
      {
        name: 'Sparkling Strawberry',
        description: 'Crushed Strawberries in sparkling water',
        priceSmall: '89',
        price: '99'
      },
      {
        name: 'Virgin Mojito',
        description: 'lemon & Mint. | Tangy and Sweet\nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Nimbu Pani Enthusiastic',
        priceSmall: '89',
        price: '99'
      },
      {
        name: 'Iced Americano',
        description: 'Black Coffee on the rocks ',
        priceSmall: '119',
        price: '139'
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
        description: 'HEALTHY Chocolate & Protein blend | Post-workout treat \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Fitness enthusiasts & choco-lovers',
        priceSmall: '115',
        price: '129',
        badges: ['Bestseller', 'Must Try']
      },
      {
        name: 'Almond Spice',
        description: 'Almond milk with warming spices Fat-loss friendly spiced delight \nNutty & aromatic \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Calorie Conscious',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Liquid Diet',
        description: 'Multi-grain nut powerhouse meal in a glass | Filling & nutritious \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Weight Gainer',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Pailwan',
        description: 'Traditional energy drink with extra strength | Creamy indulgence \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Festive vibes & Strength',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Redvelvet',
        description: 'Strawberries & Red Velvet Essence | Decadent & dreamy \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Dessert lovers',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Blueberry Cheese',
        description: 'Blueberries & Cheesecake | Rich & tangy \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Cheesecake fans',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'MangoVelvet',
        description: 'Mangoes & Velvet cake Essence | Tropical indulgence \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Mango season lovers',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Specialty Coffee Velvet',
        description: 'Freshly brewed specialty Arabica beans | Smooth & strong \nBitterness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Coffee purists',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Creamy crust',
        description: 'Custard Apple with Vanilla cream | Smooth & delicate \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Custard apple lovers',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Berry Pop',
        description: 'Mixed Berries & popcorn | Fun & fruity\nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Playful taste adventurers',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Black Pink',
        description: 'Straw Berries & Chocolate | Bold & beautiful \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Chocolate-berry combo fans',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Ice Spice',
        description: 'Real milk spices with subtle sweetness | Warming & comforting \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Traditional spice lovers',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Midnight Moca',
        description: 'Coffee, Blueberry & Chocolatey | Rich & mysterious \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Coffee lovers wanting fruity twist',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'FuK Matcha',
        description: 'Moringa & Milk  |  Bold & Sweet\nSweetness: ⬤⬤⬤⬤〇〇〇〇\nBest for: Matcha Lovers & Haters\nFlavor options :  Chocolate  Coffee  Vanilla  Caramel  Hazelnut',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Pink Candy',
        description: 'Litchi with Berries | Sweet & Tangy \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Sweet tooths',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'BubbleGum',
        description: 'Nostalgic Boomer Flavor | Sweet & playful \nSweetness: ⬤⬤⬤⬤〇〇〇〇\nBest for: Boomer Lover',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Mudpie',
        description: 'mud of Chocolate heaven | Thick & indulgent \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Chocolate lovers',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Coffee velvet',
        description: 'Velvety Coffee with sweetness Smooth & silk \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Classic coffee shake fans\nFlavor options: Vanilla   Caramel   Hazelnut',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Biscoff',
        description: 'Crushed Lotus Biscoff  | Cookie Haven\nSweetness: ⬤⬤⬤⬤〇〇〇〇\nBest for: Cookie lovers & indulgers\nFlavor options : Chocolate Coffee Vanilla Caramel Hazelnut',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Stardust',
        description: 'Smooth milky vanilla | Simple & timeless \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Minimalist',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Milky Strawberries',
        description: 'Pure strawberry goodness | Sweet & fruity \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Strawberry milk fans',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'MIlky Blueberries',
        description: 'Pure Blueberries goodness | Tangy & fruity \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Blueberries milk fans',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
      },
      {
        name: 'Iced Cocoa',
        description: 'Cocoa with milk | Dark & creamy\nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Dark Chocolate Fans',
        priceSmall: '115',
        price: '129',
        badges: ['Must Try']
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
        price: '109',
        badges: ['Bestseller', 'Must Try']
      },
      {
        name: 'Specialty Coffee',
        description: 'freshly brewed specialty Arabica beans\nSmooth & strong \nBitterness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Coffee purists',
        priceSmall: '69',
        price: '89',
        badges: ['Bestseller']
      },
      {
        name: 'Blueberry Mocha',
        description: 'Melted Chocolate with Berry surprise Delightful choco-berry warmth\nFun & indulgent Sweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Hot chocolate with a twist',
        priceSmall: '69',
        price: '89',
        badges: ['Must Try']
      },
      {
        name: 'Hot Chocolate',
        description: 'Melted Chocolate Milk Classic comfort in a cup \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Chocolate warmth seekers\nChoose: Vanilla/ Hazelnut/ Caramel ',
        priceSmall: '69',
        price: '89'
      },
      {
        name: 'Wildroot',
        description: 'erbal heat with ginger kick Warm, \nspicy & unapologetically bold | Healing & energizing \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Immunity boost & spice lovers',
        priceSmall: '69',
        price: '89'
      },
      {
        name: 'Masala Chai',
        description: 'Authentic Indian chai with spices Traditional tea perfection\nWarm & comforting \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Classic chai enthusiasts',
        priceSmall: '69',
        price: '89'
      },
      {
        name: 'Detox',
        description: 'Calming fennel (saunf) drink Soothing digestive night drink\nLight & refreshing \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: After-dinner relaxation',
        priceSmall: '59',
        price: '69'
      },
      {
        name: 'Specialty Black Coffee',
        description: 'freshly brewed specialty Arabica beans \nSmooth & strong \nBitterness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Coffee purists',
        priceSmall: '59',
        price: '69'
      },
      {
        name: 'Instant Coffee',
        description: 'Simply milk coffee\nFast & familiar \nSweetness: ⬤⬤⬤⬤〇〇〇〇 \nBest for: Roadside Coffee Lover',
        priceSmall: '49',
        price: '59'
      },
      {
        name: 'Instant Black Coffee',
        description: 'Simply milk coffee\nFast & familiar \nSweetness: ⬤⬤⬤⬤〇〇〇〇\nBest for: Roadside Coffee Lover',
        priceSmall: '59',
        price: '69',
        badges: ['Healthy']
      }
    ]
  },
  Snacks: {
    title: 'Snacks',
    items: [
      {
        name: 'Frozen Cheescake',
        price: '159',
        badges: ['Must Try']
      },
      {
        name: 'Cookie (4pcs)',
        price: '159',
        badges: ['Must Try']
      },
      {
        name: 'Penut Butter Toast (2pcs)',
        price: '159',
        badges: ['Must Try']
      },
      {
        name: 'Popped Lotus Seeds',
        price: '159',
        badges: ['Must Try']
      },
      {
        name: 'Nut Mix',
        price: '159',
        badges: ['Must Try']
      }
    ]
  }
};

    const menuRoot = document.getElementById('menu-root');
    const tagFilterRoot = document.getElementById('tag-filter-root');

    const categoryOrder = ['SparklingNectar', 'MilkyNectar', 'WarmNectar', 'Snacks'];
    const tagPriority = ['Best Seller', 'Must Try', 'New', 'Refreshing', 'Sweet', 'Unique', 'Xstatic'];
    const selectedTags = new Set();

    const badgeClass = (badge) => badge.toLowerCase().replace(/\s+/g, '-');
    const includesAny = (text, words) => words.some((word) => text.includes(word));

    const inferBadges = (item) => {
      const result = [];
      const add = (label) => {
        if (!result.includes(label)) result.push(label);
      };

      const text = `${item.name || ''} ${item.description || ''}`.toLowerCase();

      (item.badges || []).forEach((badge) => {
        const normalized = String(badge || '').toLowerCase().trim();
        if (normalized === 'must try' || normalized === 'must-try') add('Must Try');
        if (normalized === 'bestseller' || normalized === 'best seller' || normalized === 'best-seller') add('Best Seller');
        if (normalized === 'new') add('New');
        if (normalized === 'refreshing') add('Refreshing');
        if (normalized === 'sweet') add('Sweet');
        if (normalized === 'unique') add('Unique');
        if (normalized === 'xstatic') add('Xstatic');
      });

      if (includesAny(text, ['mint', 'lemon', 'lime', 'cucumber', 'watermelon', 'kiwi', 'cooling', 'refresh', 'icy', 'hydrating', 'fizzy', 'sparkling'])) add('Refreshing');
      if (includesAny(text, ['sweet', 'chocolate', 'caramel', 'vanilla', 'strawberr', 'berry', 'mango', 'litchi', 'rose', 'cookie', 'biscoff', 'dessert', 'custard'])) add('Sweet');
      if (includesAny(text, ['lavender', 'popcorn', 'fennel', 'cumin', 'moringa', 'twist', 'mysterious', 'theatrical', 'adventure', 'fusion'])) add('Unique');
      if (includesAny(text, ['energy', 'energizing', 'boost', 'protein', 'coffee', 'strength', 'powerhouse'])) add('Xstatic');
      if (includesAny(text, ['fresh', 'freshly', 'seasonal', 'new'])) add('New');

      if (!result.includes('Best Seller') && includesAny(text, ['specialty', 'signature', 'classic', 'popular'])) add('Must Try');

      return tagPriority.filter((label) => result.includes(label)).slice(0, 3);
    };

    const createMenuItem = (item) => {
      const card = document.createElement('article');
      card.className = `menu-item ${item.outOfStock ? 'out-of-stock' : ''}`;
      const autoBadges = inferBadges(item);
      card.dataset.tags = autoBadges.map((badge) => badgeClass(badge)).join(' ');

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
            tag.className = `badge ${badgeClass(badge)}`;
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
        mini.innerHTML = `<span class="price-amount">${item.priceSmall}</span><span class="price-label">Mini</span>`;
        prices.appendChild(mini);
      }

      if (item.price) {
        const regular = document.createElement('div');
        regular.className = 'price-block price-regular';
        regular.innerHTML = `<span class="price-amount price-large">${item.price}</span><span class="price-label">Reguler</span>`;
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
      return tagPriority.filter((tag) => used.has(tag));
    };

    const applyTagFilters = () => {
      const activeTags = Array.from(selectedTags);
      const hasActive = activeTags.length > 0;

      document.querySelectorAll('.menu-item').forEach((card) => {
        const itemTags = (card.dataset.tags || '').split(' ').filter(Boolean);
        // const matches = !hasActive || itemTags.some((tag) => selectedTags.has(tag));
        const matches = !hasActive || Array.from(selectedTags).every((tag) => itemTags.includes(tag));
        card.style.display = matches ? '' : 'none';
      });

      document.querySelectorAll('.menu-category').forEach((section) => {
        const items = section.querySelectorAll('.menu-item');
        const hasVisible = Array.from(items).some((item) => item.style.display !== 'none');
        section.style.display = hasVisible ? '' : 'none';

        if (hasActive && hasVisible) {
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
      tags.forEach((tag) => makeChip(tag, badgeClass(tag)));

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
      chevron.textContent = '?';

      titleRow.appendChild(chevron);
      title.appendChild(titleRow);

      if (category.subtitle) {
        const subtitle = document.createElement('span');
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
      });

      wrap.appendChild(toggle);
      wrap.appendChild(content);
      return wrap;
    };

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
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.menu-item').forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });

