/**
 * OmdocumentController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
    /*
   findByTitle: function(req, res) {
    var title = req.param('title');
    console.log(title);
    Omdocument.findByTitle(title).done(function (err, objs) {
      if (err) {
        res.send(400);
      } else {
        res.send(objs);
      }
    });
  },
  */
    


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to OmdocumentController)
   */
  _config: {}

  
};
