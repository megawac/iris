this["qwebirc"] = this["qwebirc"] || {};
this["qwebirc"]["templates"] = this["qwebirc"]["templates"] || {};

this["qwebirc"]["templates"]["faq"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"header\"><table><tr><td><img src=\"images/qwebircsmall.png\" alt=\"qwebirc\" title=\"qwebirc\"/></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td><div class=\"title\">qwebirc</div><div>Frequently Asked Questions</div></td></tr></table></div><div class=\"mainbody\"><h2>Can I make the widget autoconnect?</h2><p>No, if this was allowed then bad people could IFRAME lots and lots of copies, which would get you glined for having too many clones.<br/>However you can prefill the channel/nickname information (type /EMBED in the main window).</p><p>To be continued...</p><input type=\"button\" value=\"Close\" data-event=\"close\" class=\"btn btn-default btn-small\" /></div>";
  });