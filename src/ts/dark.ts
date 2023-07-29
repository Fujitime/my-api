namespace DarkModeModule {
    let darkModeToggle: HTMLButtonElement;
  
    function enableDarkMode() {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'enabled');
    }
  
    function disableDarkMode() {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'disabled');
    }
  
    function toggleDarkMode() {
      if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    }
  
    export function initialize() {
      darkModeToggle = document.getElementById('darkModeToggle') as HTMLButtonElement;
      if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
      }

      const darkModeStatus = localStorage.getItem('dark-mode');
      if (darkModeStatus === 'enabled') {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    }
  }
  
  export default DarkModeModule;
  