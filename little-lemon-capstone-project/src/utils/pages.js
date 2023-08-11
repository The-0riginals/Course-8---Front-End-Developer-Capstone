const pages = new Map();
pages.set('home', { name: 'Home', path: '/', anchorable: true });
pages.set('about', { name: 'About', path: '/about', anchorable: true });
pages.set('menu', { name: 'Menu', path: '/menu', anchorable: true });
pages.set('reserve', {
  name: 'Reserve',
  path: '/reserve',
  anchorable: true
});
pages.set('confirmedBooking', {
  name: 'Confirmed Booking',
  path: '/confirmed-booking',
  anchorable: false
});
pages.set('contact', { name: 'Contact', path: '/contact', anchorable: true });

export default pages;

// page.set('home', { name: 'Home', path: '/', anchorable: true }); is using for the home page
// why do we need to use the Map() function?
// because we want to store the data in a key-value pair
// for example, we want to store the home page data in the key 'home'
// we want to store the about page data in the key 'about'