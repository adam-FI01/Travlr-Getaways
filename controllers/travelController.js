exports.index = function(req, res) {
  const blogs = [
    {
      title: '2023 Best Beaches Contest Winners',
      date: 'April 02, 2023',
      link: '/news',
      excerpt: 'Integer magna leo, posuere et dignissim vitae, porttitor at odio. Pellentesque a metus nec magna placerat volutpat. Nunc nisi mi, elementum sit amet...'
    },
    {
      title: 'Top 10 Diving Spots',
      date: 'May 29, 2023',
      link: '/news',
      excerpt: 'Maecenas scelerisque odio quis arcu fringilla malesuada. Nulla facilisi. In libero nulla, fermentum ut pretium ac, pharetra et eros...'
    }
  ];

  const testimonials = {
    text: 'In hac habitasse platea dictumst. Integer purus justo, egestas eu consectetur eu, cursus in tortor. Quisque nec nunc ac mi ultrices iaculis. Aenean quis elit mauris, nec vestibulum lorem.',
    author: 'Juan De La Cruz'
  };

  res.render('index', {
    title: 'Travlr Getaways - Home',
    currentPage: 'home',
    blogs: blogs,
    testimonials: testimonials
  });
};

exports.about = function(req, res) {
  res.render('about', {
    title: 'About - Travlr Getaways',
    currentPage: 'about'
  });
};

exports.travel = function(req, res) {
  const destinations = [
    {
      name: 'Tropical Beach Getaway',
      description: 'Experience paradise with pristine beaches and crystal clear waters.'
    },
    {
      name: 'Mountain Adventure',
      description: 'Explore breathtaking mountain landscapes and outdoor activities.'
    },
    {
      name: 'City Exploration',
      description: 'Discover vibrant cities with rich culture and entertainment.'
    }
  ];

  res.render('travel', {
    title: 'Travel - Travlr Getaways',
    currentPage: 'travel',
    destinations: destinations
  });
};

exports.rooms = function(req, res) {
  const roomTypes = [
    {
      name: 'Standard Room',
      price: '$99/night',
      description: 'Comfortable room with essential amenities'
    },
    {
      name: 'Deluxe Room',
      price: '$149/night',
      description: 'Premium room with ocean view and premium furnishings'
    },
    {
      name: 'Suite',
      price: '$249/night',
      description: 'Spacious suite with separate living area and luxury amenities'
    }
  ];

  res.render('rooms', {
    title: 'Rooms - Travlr Getaways',
    currentPage: 'rooms',
    roomTypes: roomTypes
  });
};

exports.meals = function(req, res) {
  const meals = [
    {
      name: 'Breakfast Buffet',
      time: '6:00 AM - 10:00 AM',
      description: 'Full breakfast with fresh fruits, pastries, and hot dishes'
    },
    {
      name: 'Lunch Service',
      time: '12:00 PM - 3:00 PM',
      description: 'Casual lunch options including salads, sandwiches, and local cuisine'
    },
    {
      name: 'Fine Dining Dinner',
      time: '6:00 PM - 10:00 PM',
      description: 'Elegant dinner with gourmet cuisine and wine selection'
    }
  ];

  res.render('meals', {
    title: 'Meals - Travlr Getaways',
    currentPage: 'meals',
    meals: meals
  });
};

exports.news = function(req, res) {
  const newsItems = [
    {
      title: '2023 Best Beaches Contest Winners',
      date: 'April 02, 2023',
      content: 'We are excited to announce the winners of our 2023 Best Beaches Contest. The winners demonstrated exceptional knowledge and passion for beach destinations around the world.'
    },
    {
      title: 'Top 10 Diving Spots',
      date: 'May 29, 2023',
      content: 'Discover the top 10 diving spots recommended by our travel experts. From tropical reefs to exotic underwater caves, these locations offer unforgettable diving experiences.'
    },
    {
      title: 'Summer Promotion Now Live',
      date: 'June 15, 2023',
      content: 'Book your summer getaway with us and enjoy 20% discount on all room packages. Limited time offer!'
    }
  ];

  res.render('news', {
    title: 'News - Travlr Getaways',
    currentPage: 'news',
    newsItems: newsItems
  });
};

exports.contact = function(req, res) {
  res.render('contact', {
    title: 'Contact - Travlr Getaways',
    currentPage: 'contact',
    contactInfo: {
      email: 'info@travlr.com',
      phone: '1-800-TRAVLR-1',
      address: '123 Beach Road, Paradise City, PC 12345'
    }
  });
};
