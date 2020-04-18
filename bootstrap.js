/*
 * Macro Template
 *
 * Copyright (C) 2013 - 2014  NISHIMURA Ryohei
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
    var listener = function(event) {
        var window = event.currentTarget;
        var replaceMacros = function(obj, field, date) {
    var padZero = function(x, n) {
        var padZeroSub = function(s, i) {
            if (i <= 0) {
                return s;
            } else {
                return padZeroSub("0" + s, i - 1);
            }
        };
        var s = x.toString();
        return padZeroSub(s, n - s.length);
    };
            var regexs = [
                [ /{{{y}}}/g, function(date) {
                    return date.getFullYear().toString();
                } ],
                [ /{{{yy}}}/g, function(date) {
                    return padZero(date.getFullYear() % 100, 2);
                } ],
                [ /{{{yyyy}}}/g, function(date) {
                    return padZero(date.getFullYear(), 4);
                } ],
                [ /{{{M}}}/g, function(date) {
                    return (date.getMonth() + 1).toString();
                } ],
                [ /{{{MM}}}/g, function(date) {
                    return padZero(date.getMonth() + 1, 2);
                } ],
                [ /{{{MMM}}}/g, function(date) {
                    return ["Jan", "Feb", "Mar", "Apr",
                            "May", "Jun", "Jul", "Aug",
                            "Sep", "Oct", "Nov", "Dec"][date.getMonth()];
                } ],
                [ /{{{MMMM}}}/g, function(date) {
                    return ["January", "February", "March",
                            "April", "May", "June",
                            "July", "August", "September",
                            "October", "November", "December"][date.getMonth()];
                } ],
                [ /{{{d}}}/g, function(date) {
                    return date.getDate().toString();
                } ],
                [ /{{{dd}}}/g, function(date) {
                    return padZero(date.getDate(), 2);
                } ],
                [ /{{{dd1}}}/g, function(date) {
                    var newDate = new Date;
                    newDate.setDate(newDate.getDate() + 1);
                    return padZero(newDate.getDate(), 2);
                } ],
                [ /{{{dd2}}}/g, function(date) {
                    var newDate = new Date;
                    newDate.setDate(newDate.getDate() + 2);
                    return padZero(newDate.getDate(), 2);
                } ],
                [ /{{{dd3}}}/g, function(date) {
                    var newDate = new Date;
                    newDate.setDate(newDate.getDate() + 3);
                    return padZero(newDate.getDate(), 2);
                } ],
                [ /{{{dd4}}}/g, function(date) {
                    var newDate = new Date;
                    newDate.setDate(newDate.getDate() + 4);
                    return padZero(newDate.getDate(), 2);
                } ],
                [ /{{{dd5}}}/g, function(date) {
                    var newDate = new Date;
                    newDate.setDate(newDate.getDate() + 5);
                    return padZero(newDate.getDate(), 2);
                } ],
                [ /{{{dd6}}}/g, function(date) {
                    var newDate = new Date;
                    newDate.setDate(newDate.getDate() + 6);
                    return padZero(newDate.getDate(), 2);
                } ],
                [ /{{{E}}}/g, function(date) {
                    return ["Sunday", "Monday", "Tuesday", "Wednesday",
                            "Thursday", "Friday", "Saturday"][date.getDay()];
                } ],
                [ /{{{EEE}}}/g, function(date) {
                    return ["Sun", "Mon", "Tue", "Wed",
                            "Thu", "Fri", "Sat"][date.getDay()];
                } ],
                [ /{{{EJ}}}/g, function(date) {
                    return ["\u65E5", "\u6708", "\u706B", "\u6C34",
                            "\u6728", "\u91D1", "\u571F"][date.getDay()];
                } ],
                [ /{{{EJ1}}}/g, function(date) {
                    var day = (date.getDay() + 1) % 7
                    return ["\u65E5", "\u6708", "\u706B", "\u6C34",
                            "\u6728", "\u91D1", "\u571F"][day];
                } ],
                [ /{{{EJ2}}}/g, function(date) {
                    var day = (date.getDay() + 2) % 7
                    return ["\u65E5", "\u6708", "\u706B", "\u6C34",
                            "\u6728", "\u91D1", "\u571F"][day];
                } ],
                [ /{{{EJ3}}}/g, function(date) {
                    var day = (date.getDay() + 3) % 7
                    return ["\u65E5", "\u6708", "\u706B", "\u6C34",
                            "\u6728", "\u91D1", "\u571F"][day];
                } ],
                [ /{{{EJ4}}}/g, function(date) {
                    var day = (date.getDay() + 4) % 7
                    return ["\u65E5", "\u6708", "\u706B", "\u6C34",
                            "\u6728", "\u91D1", "\u571F"][day];
                } ],
                [ /{{{EJ5}}}/g, function(date) {
                    var day = (date.getDay() + 5) % 7
                    return ["\u65E5", "\u6708", "\u706B", "\u6C34",
                            "\u6728", "\u91D1", "\u571F"][day];
                } ],
                [ /{{{EJ6}}}/g, function(date) {
                    var day = (date.getDay() + 6) % 7
                    return ["\u65E5", "\u6708", "\u706B", "\u6C34",
                            "\u6728", "\u91D1", "\u571F"][day];
                } ],
                [ /{{{H}}}/g, function(date) {
                    return date.getHours().toString();
                } ],
                [ /{{{HH}}}/g, function(date) {
                    return padZero(date.getHours(), 2);
                } ],
                [ /{{{m}}}/g, function(date) {
                    return date.getMinutes().toString();
                } ],
                [ /{{{mm}}}/g, function(date) {
                    return padZero(date.getMinutes(), 2);
                } ],
                [ /{{{s}}}/g, function(date) {
                    return date.getSeconds().toString();
                } ],
                [ /{{{ss}}}/g, function(date) {
                    return padZero(date.getSeconds(), 2);
                } ],
            ];
            var s = obj[field];
            for (var i = 0; i < regexs.length; ++i) {
                s = s.replace(regexs[i][0], regexs[i][1](date));
            }
            if (s != obj[field]) {
                obj[field] = s;
            }
        };
        var handler = {
            date: null,
            NotifyComposeFieldsReady: function() {
                this.date = new Date();
                var document = window.document;
                replaceMacros(document.getElementById("msgSubject"), "value",
                              this.date);
            },
            ComposeProcessDone: function(aResult) {
            },
            SaveInFolderDone: function(folderName) {
            },
            NotifyComposeBodyReady: function() {
                var document = window.document;
                var icol = 1;
                var col;
                while (true) {
                    var id = "addressCol2#" + (icol++).toString();
                    col = document.getElementById(id);
                    if (col == null) {
                        break;
                    }
                    replaceMacros(col, "value", this.date);
                }
                var contentFrame = document.getElementById("content-frame");
                var body = contentFrame.contentDocument.body.innerHTML;
                replaceMacros(contentFrame.contentDocument.body, "innerHTML",
                              this.date);
            },
        };
        window.gMsgCompose.RegisterStateListener(handler);
    };

var windowListener = {
    onOpenWindow: function(aWindow) {
        var domWindow = aWindow.
            QueryInterface(Components.interfaces.nsIInterfaceRequestor).
            getInterface(Components.interfaces.nsIDOMWindow);
        domWindow.addEventListener("compose-window-init", listener, true);
    },
    onCloseWindow: function (aWindow) {
        var domWindow = aWindow.
            QueryInterface(Components.interfaces.nsIInterfaceRequestor).
            getInterface(Components.interfaces.nsIDOMWindow);
        domWindow.removeEventListener("compose-window-init", listener, true);
    },
    onWindowTitleChange: function (aWindow, aTitle) {
    },
};

var startup = function(data, reason) {
    var windowMediator =
        Components.classes["@mozilla.org/appshell/window-mediator;1"].
        getService(Components.interfaces.nsIWindowMediator);
    for (var i = windowMediator.getEnumerator("msgcompose");
         i.hasMoreElements();) {
        var domWindow = i.getNext().
            QueryInterface(Components.interfaces.nsIInterfaceRequestor).
            getInterface(Components.interfaces.nsIDOMWindow);
        domWindow.addEventListener("compose-window-init", listener, true);
    }
    windowMediator.addListener(windowListener);
};

var shutdown = function(data, reason) {
    var windowMediator =
        Components.classes["@mozilla.org/appshell/window-mediator;1"].
        getService(Components.interfaces.nsIWindowMediator);
    for (var i = windowMediator.getEnumerator("msgcompose");
         i.hasMoreElements();) {
        var domWindow = i.getNext().
            QueryInterface(Components.interfaces.nsIInterfaceRequestor).
            getInterface(Components.interfaces.nsIDOMWindow);
        domWindow.removeEventListener("compose-window-init", listener, true);
    }
    windowMediator.removeListener(windowListener);
};

var install = function(data, reason) {
};

var uninstall = function(data, reason) {
};
