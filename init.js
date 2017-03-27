plugin.loadLang();

plugin.loadCSS("linksickrage");

plugin.onLangLoaded = function()
{
    this.addButtonToToolbar("linksickrage", theUILang.linksickrage, plugin.optionlink+"('" + plugin.url + "')", "help");
    this.addSeparatorToToolbar("help");
}

plugin.onRemove = function()
{
    this.removeSeparatorFromToolbar("linksickrage");
    this.removeButtonFromToolbar("linksickrage");
}
