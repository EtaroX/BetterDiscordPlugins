/**
 * @name Free Discord Customisation
 * @version 0.0.2
 * @description Allows you to customize your Profile through discord.etaro.pl site
 * @author Etaro#4088
 * @website https://discord.etaro.pl
 */

 module.exports = meta => {
  return {
    start: () => {
      //make a style element
      const style = document.createElement('style');
      style.id = 'FreeDiscordCustomisation';
      document.body.appendChild(style);
      //get the style element
      const styleElement = document.getElementById('FreeDiscordCustomisation');
      //get the css from the site
      fetch('https://discord.etaro.pl/customProfile/main.css')
        .then(response => response.text())
        .then(text => {
          //set the css
          styleElement.innerHTML = text;
        }
      );


    },
    stop: () => {
      const styleElement = document.getElementById('FreeDiscordCustomisation');
      styleElement.remove();

    }
  }
};
