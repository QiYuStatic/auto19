

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = 0;
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "%(sel)s of %(cnt)s selected": [
      "\u9009\u4e2d\u4e86 %(cnt)s \u4e2a\u4e2d\u7684 %(sel)s \u4e2a"
    ],
    "6 a.m.": "\u4e0a\u53486\u70b9",
    "6 p.m.": "\u4e0b\u53486\u70b9",
    "April": "\u56db\u6708",
    "August": "\u516b\u6708",
    "Available %s": "\u53ef\u7528 %s",
    "Cancel": "\u53d6\u6d88",
    "Choose": "\u9009\u62e9",
    "Choose a Date": "\u9009\u62e9\u4e00\u4e2a\u65e5\u671f",
    "Choose a Time": "\u9009\u62e9\u4e00\u4e2a\u65f6\u95f4",
    "Choose a time": "\u9009\u62e9\u4e00\u4e2a\u65f6\u95f4",
    "Choose all": "\u5168\u9009",
    "Chosen %s": "\u9009\u4e2d\u7684 %s",
    "Click to choose all %s at once.": "\u70b9\u51fb\u9009\u62e9\u5168\u90e8%s\u3002",
    "Click to remove all chosen %s at once.": "\u5220\u9664\u6240\u6709\u5df2\u9009\u62e9\u7684%s\u3002",
    "December": "\u5341\u4e8c\u6708",
    "February": "\u4e8c\u6708",
    "Filter": "\u8fc7\u6ee4",
    "Hide": "\u9690\u85cf",
    "January": "\u4e00\u6708",
    "July": "\u4e03\u6708",
    "JumpHost\u0004\u5821\u5792\u673aSSH\u5bc6\u94a5": "\u5821\u5792\u673aSSH\u5bc6\u94a5",
    "JumpHost\u0004\u8d26\u53f7": "\u8d26\u53f7",
    "JumpHost\u0004\u8fde\u63a5\u5821\u5792\u670d\u52a1\u5668\u4f7f\u7528\u7684SSH\u5bc6\u94a5, \u5f53\u524d\u4ec5\u652f\u6301 SSH \u8bc1\u4e66\u8ba4\u8bc1": "\u8fde\u63a5\u5821\u5792\u670d\u52a1\u5668\u4f7f\u7528\u7684SSH\u5bc6\u94a5, \u5f53\u524d\u4ec5\u652f\u6301 SSH \u8bc1\u4e66\u8ba4\u8bc1",
    "JumpHost\u0004\u8fde\u63a5\u5821\u5792\u670d\u52a1\u5668\u4f7f\u7528\u7684\u8d26\u53f7": "\u8fde\u63a5\u5821\u5792\u670d\u52a1\u5668\u4f7f\u7528\u7684\u8d26\u53f7",
    "June": "\u516d\u6708",
    "March": "\u4e09\u6708",
    "May": "\u4e94\u6708",
    "Midnight": "\u5348\u591c",
    "Noon": "\u6b63\u5348",
    "Note: You are %s hour ahead of server time.": [
      "\u6ce8\u610f\uff1a\u4f60\u6bd4\u670d\u52a1\u5668\u65f6\u95f4\u8d85\u524d %s \u4e2a\u5c0f\u65f6\u3002"
    ],
    "Note: You are %s hour behind server time.": [
      "\u6ce8\u610f\uff1a\u4f60\u6bd4\u670d\u52a1\u5668\u65f6\u95f4\u6ede\u540e %s \u4e2a\u5c0f\u65f6\u3002"
    ],
    "November": "\u5341\u4e00\u6708",
    "Now": "\u73b0\u5728",
    "October": "\u5341\u6708",
    "Remove": "\u5220\u9664",
    "Remove all": "\u5220\u9664\u5168\u90e8",
    "SSH\u0004SSH \u8fde\u63a5\u670d\u52a1\u5668\u4f7f\u7528\u7684\u79c1\u94a5\u8bc1\u4e66\u3002 \u6ce8\u610f: \u8bc1\u4e66\u4e0d\u5141\u8bb8\u5bc6\u7801": "SSH \u8fde\u63a5\u670d\u52a1\u5668\u4f7f\u7528\u7684\u79c1\u94a5\u8bc1\u4e66\u3002 \u6ce8\u610f: \u8bc1\u4e66\u4e0d\u5141\u8bb8\u5bc6\u7801",
    "SSH\u0004known hosts": "known hosts",
    "SSH\u0004known hosts \u53ef\u4ee5\u6709\u6548\u9632\u6b62 DNS/IP \u52ab\u6301\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528 ssh-keyscan \u83b7\u53d6\u60a8\u670d\u52a1\u5668\u7684 known_host \u914d\u7f6e": "known hosts \u53ef\u4ee5\u6709\u6548\u9632\u6b62 DNS/IP \u52ab\u6301\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528 ssh-keyscan \u83b7\u53d6\u60a8\u670d\u52a1\u5668\u7684 known_host \u914d\u7f6e",
    "SSH\u0004\u5821\u5792\u673a\u914d\u7f6e": "\u5821\u5792\u673a\u914d\u7f6e",
    "SSH\u0004\u5982\u679c\u4e0d\u9700\u8981\u4f7f\u7528\u5821\u5792\u673a\u8fde\u63a5\u60a8\u7684\u670d\u52a1\u5668\uff0c\u5ffd\u7565\u6b64\u914d\u7f6e\u5373\u53ef": "\u5982\u679c\u4e0d\u9700\u8981\u4f7f\u7528\u5821\u5792\u673a\u8fde\u63a5\u60a8\u7684\u670d\u52a1\u5668\uff0c\u5ffd\u7565\u6b64\u914d\u7f6e\u5373\u53ef",
    "SSH\u0004\u79c1\u94a5\u8bc1\u4e66": "\u79c1\u94a5\u8bc1\u4e66",
    "SSH\u0004\u9ad8\u7ea7\u914d\u7f6e": "\u9ad8\u7ea7\u914d\u7f6e",
    "September": "\u4e5d\u6708",
    "Show": "\u663e\u793a",
    "TargetServer\u0004\u5220\u9664": "\u5220\u9664",
    "TargetServer\u0004\u5bc6\u7801": "\u5bc6\u7801",
    "TargetServer\u0004\u6700\u591a\u5141\u8bb8 5 \u4e2a\u76ee\u6807\u670d\u52a1\u5668": "\u6700\u591a\u5141\u8bb8 5 \u4e2a\u76ee\u6807\u670d\u52a1\u5668",
    "TargetServer\u0004\u670d\u52a1\u5668": "\u670d\u52a1\u5668",
    "TargetServer\u0004\u670d\u52a1\u5668\u914d\u7f6e": "\u670d\u52a1\u5668\u914d\u7f6e",
    "TargetServer\u0004\u6dfb\u52a0\u670d\u52a1\u5668": "\u6dfb\u52a0\u670d\u52a1\u5668",
    "TargetServer\u0004\u8d26\u53f7": "\u8d26\u53f7",
    "TargetServer\u0004\u8fde\u63a5\u76ee\u6807\u670d\u52a1\u5668\u4f7f\u7528\u7684\u5bc6\u7801[\u5982\u679c\u60a8\u4f7f\u7528\u8bc1\u4e66\u8ba4\u8bc1\uff0c\u8bf7\u5230\u9ad8\u7ea7\u914d\u7f6e\u91cc\u9762\u8bbe\u7f6e]\u3002\u5982\u679c\u9700\u8981,\u6b64\u5bc6\u7801\u4f1a\u4f5c\u4e3a sudo \u65f6\u4f7f\u7528\u7684\u5bc6\u7801": "\u8fde\u63a5\u76ee\u6807\u670d\u52a1\u5668\u4f7f\u7528\u7684\u5bc6\u7801[\u5982\u679c\u60a8\u4f7f\u7528\u8bc1\u4e66\u8ba4\u8bc1\uff0c\u8bf7\u5230\u9ad8\u7ea7\u914d\u7f6e\u91cc\u9762\u8bbe\u7f6e]\u3002\u5982\u679c\u9700\u8981,\u6b64\u5bc6\u7801\u4f1a\u4f5c\u4e3a sudo \u65f6\u4f7f\u7528\u7684\u5bc6\u7801",
    "TargetServer\u0004\u8fde\u63a5\u76ee\u6807\u670d\u52a1\u5668\u4f7f\u7528\u7684\u8d26\u53f7": "\u8fde\u63a5\u76ee\u6807\u670d\u52a1\u5668\u4f7f\u7528\u7684\u8d26\u53f7",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "\u8fd9\u662f\u53ef\u7528\u7684%s\u5217\u8868\u3002\u4f60\u53ef\u4ee5\u5728\u9009\u62e9\u6846\u4e0b\u9762\u8fdb\u884c\u9009\u62e9\uff0c\u7136\u540e\u70b9\u51fb\u4e24\u9009\u6846\u4e4b\u95f4\u7684\u201c\u9009\u62e9\u201d\u7bad\u5934\u3002",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "\u8fd9\u662f\u9009\u4e2d\u7684 %s \u7684\u5217\u8868\u3002\u4f60\u53ef\u4ee5\u5728\u9009\u62e9\u6846\u4e0b\u9762\u8fdb\u884c\u9009\u62e9\uff0c\u7136\u540e\u70b9\u51fb\u4e24\u9009\u6846\u4e4b\u95f4\u7684\u201c\u5220\u9664\u201d\u7bad\u5934\u8fdb\u884c\u5220\u9664\u3002",
    "Today": "\u4eca\u5929",
    "Tomorrow": "\u660e\u5929",
    "Type into this box to filter down the list of available %s.": "\u5728\u6b64\u6846\u4e2d\u952e\u5165\u4ee5\u8fc7\u6ee4\u53ef\u7528\u7684%s\u5217\u8868",
    "Yesterday": "\u6628\u5929",
    "You have selected an action, and you haven\u2019t made any changes on individual fields. You\u2019re probably looking for the Go button rather than the Save button.": "\u4f60\u5df2\u7ecf\u9009\u62e9\u4e00\u4e2a\u52a8\u4f5c\uff0c\u4f46\u662f\u6ca1\u6709\u5355\u72ec\u4fee\u6539\u4efb\u4f55\u4e00\u5904\u3002\u4f60\u53ef\u4ee5\u9009\u62e9'Go'\u6309\u952e\u800c\u4e0d\u662f'Save'\u6309\u952e\u3002",
    "You have selected an action, but you haven\u2019t saved your changes to individual fields yet. Please click OK to save. You\u2019ll need to re-run the action.": "\u4f60\u5df2\u7ecf\u9009\u62e9\u4e00\u4e2a\u52a8\u4f5c\uff0c\u4f46\u662f\u4f60\u6ca1\u6709\u4fdd\u5b58\u4f60\u5355\u72ec\u4fee\u6539\u7684\u5730\u65b9\u3002\u8bf7\u70b9\u51fbOK\u4fdd\u5b58\u3002\u4f60\u9700\u8981\u518d\u91cd\u65b0\u8dd1\u8fd9\u4e2a\u52a8\u4f5c\u3002",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "\u4f60\u5c1a\u672a\u4fdd\u5b58\u4e00\u4e2a\u53ef\u7f16\u8f91\u680f\u4f4d\u7684\u53d8\u66f4. \u5982\u679c\u4f60\u8fdb\u884c\u522b\u7684\u52a8\u4f5c, \u672a\u4fdd\u5b58\u7684\u53d8\u66f4\u5c06\u4f1a\u4e22\u5931.",
    "abbrev. month April\u0004Apr": "\u56db\u6708",
    "abbrev. month August\u0004Aug": "\u516b\u6708",
    "abbrev. month December\u0004Dec": "\u5341\u4e8c\u6708",
    "abbrev. month February\u0004Feb": "\u4e8c\u6708",
    "abbrev. month January\u0004Jan": "\u4e00\u6708",
    "abbrev. month July\u0004Jul": "\u4e03\u6708",
    "abbrev. month June\u0004Jun": "\u516d\u6708",
    "abbrev. month March\u0004Mar": "\u4e09\u6708",
    "abbrev. month May\u0004May": "\u4e94\u6708",
    "abbrev. month November\u0004Nov": "\u5341\u4e00\u6708",
    "abbrev. month October\u0004Oct": "\u5341\u6708",
    "abbrev. month September\u0004Sep": "\u4e5d\u6708",
    "auto_dt\u0004SMTP \u53d1\u4ef6\u540d\u79f0": "SMTP \u53d1\u4ef6\u540d\u79f0",
    "auto_dt\u0004SMTP \u53d1\u4ef6\u90ae\u7bb1": "SMTP \u53d1\u4ef6\u90ae\u7bb1",
    "auto_dt\u0004Vaultwarden \u4e2d\u7684\u7ec4\u7ec7\u540d\u79f0": "Vaultwarden \u4e2d\u7684\u7ec4\u7ec7\u540d\u79f0",
    "auto_dt\u0004Vaultwarden \u4ee4\u724c\u7528\u4e8e\u7ba1\u7406 vautwarden \u5b9e\u4f8b\u3002\n\n(\u9ed8\u8ba4: \u81ea\u52a8\u751f\u6210)\n": "Vaultwarden \u4ee4\u724c\u7528\u4e8e\u7ba1\u7406 vautwarden \u5b9e\u4f8b\u3002\n\n(\u9ed8\u8ba4: \u81ea\u52a8\u751f\u6210)\n",
    "auto_dt\u0004Vaultwarden \u5b89\u88c5\u53c2\u6570": "Vaultwarden \u5b89\u88c5\u53c2\u6570",
    "auto_dt\u0004array \u6570\u636e\u7c7b\u578b": "array \u6570\u636e\u7c7b\u578b",
    "auto_dt\u0004array\u503c": "array\u503c",
    "auto_dt\u0004vaultwarden \u7684\u793a\u4f8b\u7f51\u9875\u8bbf\u95ee\u5730\u5740\u3002\n\n\u4f8b\u5982: \"https://vaultwarden.example.com\"\n": "vaultwarden \u7684\u793a\u4f8b\u7f51\u9875\u8bbf\u95ee\u5730\u5740\u3002\n\n\u4f8b\u5982: \"https://vaultwarden.example.com\"\n",
    "auto_dt\u0004vaultwarden \u90ae\u7bb1\u914d\u7f6e": "vaultwarden \u90ae\u7bb1\u914d\u7f6e",
    "auto_dt\u0004\u53d1\u4ef6\u4eba\u90ae\u7bb1\u901a\u5e38\u662f\u60a8\u7684\u90ae\u7bb1\u8d26\u53f7\u3002\n\n\u4f8b\u5982: \"\u7ba1\u7406\u5458 <admin@example.com>\" \u4e2d\u7684 \"admin@example.com\"": "\u53d1\u4ef6\u4eba\u90ae\u7bb1\u901a\u5e38\u662f\u60a8\u7684\u90ae\u7bb1\u8d26\u53f7\u3002\n\n\u4f8b\u5982: \"\u7ba1\u7406\u5458 <admin@example.com>\" \u4e2d\u7684 \"admin@example.com\"",
    "auto_dt\u0004\u5b89\u88c5 vaultwarden": "\u5b89\u88c5 vaultwarden",
    "auto_dt\u0004\u5bc6\u7801": "\u5bc6\u7801",
    "auto_dt\u0004\u60a8\u7684\u90ae\u7bb1\u540d\u79f0.\n\n\u4f8b\u5982: \"\u7ba1\u7406\u5458 <admin@example.com>\" \u4e2d\u7684 \"\u7ba1\u7406\u5458\"": "\u60a8\u7684\u90ae\u7bb1\u540d\u79f0.\n\n\u4f8b\u5982: \"\u7ba1\u7406\u5458 <admin@example.com>\" \u4e2d\u7684 \"\u7ba1\u7406\u5458\"",
    "auto_dt\u0004\u7535\u5b50\u90ae\u7bb1\u914d\u7f6e": "\u7535\u5b50\u90ae\u7bb1\u914d\u7f6e",
    "auto_dt\u0004\u7ba1\u7406\u5458\u4ee4\u724c": "\u7ba1\u7406\u5458\u4ee4\u724c",
    "auto_dt\u0004\u7ec4\u7ec7\u540d\u79f0": "\u7ec4\u7ec7\u540d\u79f0",
    "auto_dt\u0004\u7ed3\u6784\u4f53": "\u7ed3\u6784\u4f53",
    "auto_dt\u0004\u8bbf\u95ee\u7f51\u5740": "\u8bbf\u95ee\u7f51\u5740",
    "auto_dt\u0004\u8d26\u53f7": "\u8d26\u53f7",
    "one letter Friday\u0004F": "F",
    "one letter Monday\u0004M": "M",
    "one letter Saturday\u0004S": "S",
    "one letter Sunday\u0004S": "S",
    "one letter Thursday\u0004T": "T",
    "one letter Tuesday\u0004T": "T",
    "one letter Wednesday\u0004W": "W",
    "ui\u0004Terminal": "\u7ec8\u7aef",
    "ui\u0004WebSocket \u8fde\u63a5\u5931\u8d25...": "WebSocket \u8fde\u63a5\u5931\u8d25...",
    "ui\u0004WebSocket \u8fde\u63a5\u5df2\u65ad\u5f00": "WebSocket \u8fde\u63a5\u5df2\u65ad\u5f00",
    "ui\u0004WebSocket \u8fde\u63a5\u6210\u529f": "WebSocket \u8fde\u63a5\u6210\u529f",
    "ui\u0004object \u9519\u8bef": "object \u9519\u8bef",
    "ui\u0004object(allOf)\u7c7b\u578b\u9519\u8bef!(\u7cfb\u7edf\u5185\u90e8\u9519\u8bef\uff0c\u8bf7\u8054\u7cfb\u5f00\u53d1\u8005)": "object(allOf)\u7c7b\u578b\u9519\u8bef!(\u7cfb\u7edf\u5185\u90e8\u9519\u8bef\uff0c\u8bf7\u8054\u7cfb\u5f00\u53d1\u8005)",
    "ui\u0004{{ host }} \u5f00\u59cb\u8fd0\u884c {{task}}": "{{ host }} \u5f00\u59cb\u8fd0\u884c {{task}}",
    "ui\u0004{{ host }} \u8df3\u8fc7\u8fd0\u884c": "{{ host }} \u8df3\u8fc7\u8fd0\u884c",
    "ui\u0004{{ host }} \u8fd0\u884c {{task}} \u5931\u8d25": "{{ host }} \u8fd0\u884c {{task}} \u5931\u8d25",
    "ui\u0004{{ host }} \u8fd0\u884c {{task}} \u6210\u529f": "{{ host }} \u8fd0\u884c {{task}} \u6210\u529f",
    "ui\u0004\u4e0d\u5b58\u5728\u5f15\u7528\u7c7b\u578b!(\u7cfb\u7edf\u5185\u90e8\u9519\u8bef\uff0c\u8bf7\u8054\u7cfb\u5f00\u53d1\u8005)": "\u4e0d\u5b58\u5728\u5f15\u7528\u7c7b\u578b!(\u7cfb\u7edf\u5185\u90e8\u9519\u8bef\uff0c\u8bf7\u8054\u7cfb\u5f00\u53d1\u8005)",
    "ui\u0004\u4efb\u52a1\u5220\u9664\u4e4b\u540e\u5c06\u65e0\u6cd5\u6062\u590d\uff0c\u5e76\u4e14\u60a8\u4e5f\u65e0\u6cd5\u7f51\u9875\u67e5\u770b\u6b64\u4efb\u52a1\uff0c\u786e\u8ba4\u5220\u9664?": "\u4efb\u52a1\u5220\u9664\u4e4b\u540e\u5c06\u65e0\u6cd5\u6062\u590d\uff0c\u5e76\u4e14\u60a8\u4e5f\u65e0\u6cd5\u7f51\u9875\u67e5\u770b\u6b64\u4efb\u52a1\uff0c\u786e\u8ba4\u5220\u9664?",
    "ui\u0004\u4efb\u52a1\u5f00\u59cb\u8fd0\u884c": "\u4efb\u52a1\u5f00\u59cb\u8fd0\u884c",
    "ui\u0004\u4efb\u52a1\u7ed3\u679c\u6c47\u603b": "\u4efb\u52a1\u7ed3\u679c\u6c47\u603b",
    "ui\u0004\u51c6\u5907\u6267\u884c {{task}}": "\u51c6\u5907\u6267\u884c {{task}}",
    "ui\u0004\u51c6\u5907\u6267\u884c\u4efb\u52a1": "\u51c6\u5907\u6267\u884c\u4efb\u52a1",
    "ui\u0004\u51c6\u5907\u6536\u96c6\u670d\u52a1\u5668\u7684\u57fa\u7840\u4fe1\u606f": "\u51c6\u5907\u6536\u96c6\u670d\u52a1\u5668\u7684\u57fa\u7840\u4fe1\u606f",
    "ui\u0004\u5220\u9664": "\u5220\u9664",
    "ui\u0004\u5220\u9664\u4efb\u52a1": "\u5220\u9664\u4efb\u52a1",
    "ui\u0004\u5220\u9664\u4efb\u52a1\u6210\u529f! ({{seconds}}\u79d2\u540e\u8df3\u8f6c\u5230\u9996\u9875": "\u5220\u9664\u4efb\u52a1\u6210\u529f! ({{seconds}}\u79d2\u540e\u8df3\u8f6c\u5230\u9996\u9875",
    "ui\u0004\u53c2\u6570\u9884\u89c8": "\u53c2\u6570\u9884\u89c8",
    "ui\u0004\u53cd\u9988\u3001\u8c03\u8bd5\u95ee\u9898\u65f6\u7531\u5f00\u53d1\u4eba\u5458\u4f7f\u7528\u3002": "\u53cd\u9988\u3001\u8c03\u8bd5\u95ee\u9898\u65f6\u7531\u5f00\u53d1\u4eba\u5458\u4f7f\u7528\u3002",
    "ui\u0004\u53d6\u6d88\u4efb\u52a1": "\u53d6\u6d88\u4efb\u52a1",
    "ui\u0004\u53d6\u6d88\u4efb\u52a1?": "\u53d6\u6d88\u4efb\u52a1?",
    "ui\u0004\u53d6\u6d88\u4efb\u52a1\u5931\u8d25": "\u53d6\u6d88\u4efb\u52a1\u5931\u8d25",
    "ui\u0004\u53d6\u6d88\u4efb\u52a1\u6210\u529f": "\u53d6\u6d88\u4efb\u52a1\u6210\u529f",
    "ui\u0004\u547d\u4ee4\u56de\u653e": "\u547d\u4ee4\u56de\u653e",
    "ui\u0004\u552f\u4e00\u6807\u8bc6": "\u552f\u4e00\u6807\u8bc6",
    "ui\u0004\u5efa\u7acb\u8fde\u63a5\u4e2d...": "\u5efa\u7acb\u8fde\u63a5\u4e2d...",
    "ui\u0004\u5f00\u59cb\u6536\u96c6 {{host}} \u670d\u52a1\u5668\u7684\u57fa\u7840\u4fe1\u606f": "\u5f00\u59cb\u6536\u96c6 {{host}} \u670d\u52a1\u5668\u7684\u57fa\u7840\u4fe1\u606f",
    "ui\u0004\u5f00\u59cb\u65f6\u95f4": "\u5f00\u59cb\u65f6\u95f4",
    "ui\u0004\u5f3a\u5236\u7ed3\u675f\u4efb\u52a1": "\u5f3a\u5236\u7ed3\u675f\u4efb\u52a1",
    "ui\u0004\u5f3a\u5236\u7ed3\u675f\u4efb\u52a1?": "\u5f3a\u5236\u7ed3\u675f\u4efb\u52a1?",
    "ui\u0004\u60a8\u786e\u8ba4\u5220\u9664\u6b64\u4efb\u52a1?": "\u60a8\u786e\u8ba4\u5220\u9664\u6b64\u4efb\u52a1?",
    "ui\u0004\u60a8\u786e\u8ba4\u53d6\u6d88\u6b63\u5728\u8fd0\u884c\u7684\u4efb\u52a1?": "\u60a8\u786e\u8ba4\u53d6\u6d88\u6b63\u5728\u8fd0\u884c\u7684\u4efb\u52a1?",
    "ui\u0004\u60a8\u786e\u8ba4\u5f3a\u5236\u7ed3\u675f\u6b63\u5728\u8fd0\u884c\u7684\u4efb\u52a1?": "\u60a8\u786e\u8ba4\u5f3a\u5236\u7ed3\u675f\u6b63\u5728\u8fd0\u884c\u7684\u4efb\u52a1?",
    "ui\u0004\u6536\u96c6\u670d\u52a1\u5668 {{host}} \u57fa\u7840\u4fe1\u606f\u5931\u8d25": "\u6536\u96c6\u670d\u52a1\u5668 {{host}} \u57fa\u7840\u4fe1\u606f\u5931\u8d25",
    "ui\u0004\u6536\u96c6\u670d\u52a1\u5668 {{host}} \u57fa\u7840\u4fe1\u606f\u6210\u529f": "\u6536\u96c6\u670d\u52a1\u5668 {{host}} \u57fa\u7840\u4fe1\u606f\u6210\u529f",
    "ui\u0004\u653e\u5f03": "\u653e\u5f03",
    "ui\u0004\u653e\u5f03\u5220\u9664": "\u653e\u5f03\u5220\u9664",
    "ui\u0004\u670d\u52a1\u5668\u8fde\u63a5\u5df2\u7ecf\u65ad\u5f00 [\u8bf7\u5237\u65b0\u9875\u9762]": "\u670d\u52a1\u5668\u8fde\u63a5\u5df2\u7ecf\u65ad\u5f00 [\u8bf7\u5237\u65b0\u9875\u9762]",
    "ui\u0004\u6807\u51c6\u8f93\u51fa": "\u6807\u51c6\u8f93\u51fa",
    "ui\u0004\u786e\u8ba4": "\u786e\u8ba4",
    "ui\u0004\u786e\u8ba4\u5220\u9664": "\u786e\u8ba4\u5220\u9664",
    "ui\u0004\u7c7b\u578b\u9519\u8bef": "\u7c7b\u578b\u9519\u8bef",
    "ui\u0004\u8054\u5408\u7c7b\u578b\u6700\u5c11\u9700\u8981\u4e24\u4e2a\u5143\u7d20!(\u7cfb\u7edf\u5185\u90e8\u9519\u8bef\uff0c\u8bf7\u8054\u7cfb\u5f00\u53d1\u8005)": "\u8054\u5408\u7c7b\u578b\u6700\u5c11\u9700\u8981\u4e24\u4e2a\u5143\u7d20!(\u7cfb\u7edf\u5185\u90e8\u9519\u8bef\uff0c\u8bf7\u8054\u7cfb\u5f00\u53d1\u8005)",
    "ui\u0004\u8be6\u7ec6\u4fe1\u606f": "\u8be6\u7ec6\u4fe1\u606f",
    "ui\u0004\u8df3\u8fc7\u8fd0\u884c {{task}}": "\u8df3\u8fc7\u8fd0\u884c {{task}}",
    "ui\u0004\u8fd0\u884c {{task}} \u5931\u8d25": "\u8fd0\u884c {{task}} \u5931\u8d25",
    "ui\u0004\u8fd0\u884c {{task}} \u6210\u529f": "\u8fd0\u884c {{task}} \u6210\u529f",
    "ui\u0004\u901a\u7528\u4fe1\u606f": "\u901a\u7528\u4fe1\u606f",
    "\u5821\u5792\u673a\u5730\u5740": "\u5821\u5792\u673a\u5730\u5740",
    "\u5821\u5792\u673a\u670d\u52a1\u5668\u7684\u57df\u540d \u6216\u8005 IP\u5730\u5740, \u4f8b\u5982: 1.1.1.1": "\u5821\u5792\u673a\u670d\u52a1\u5668\u7684\u57df\u540d \u6216\u8005 IP\u5730\u5740, \u4f8b\u5982: 1.1.1.1",
    "\u7f16\u8f91\u5668\u0004SSH \u6216 win remote management \u670d\u52a1\u7684\u7aef\u53e3\u53f7": "SSH \u6216 win remote management \u670d\u52a1\u7684\u7aef\u53e3\u53f7",
    "\u7f16\u8f91\u5668\u0004\u53c2\u6570\u914d\u7f6e": "\u53c2\u6570\u914d\u7f6e",
    "\u7f16\u8f91\u5668\u0004\u63d0\u4ea4\u4efb\u52a1": "\u63d0\u4ea4\u4efb\u52a1",
    "\u7f16\u8f91\u5668\u0004\u65b0\u589e": "\u65b0\u589e",
    "\u7f16\u8f91\u5668\u0004\u6ca1\u6709\u53c2\u6570\u9700\u8981\u914d\u7f6e": "\u6ca1\u6709\u53c2\u6570\u9700\u8981\u914d\u7f6e",
    "\u7f16\u8f91\u5668\u0004\u7aef\u53e3\u53f7": "\u7aef\u53e3\u53f7"
  };
  for (const key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      const value = django.catalog[msgid];
      if (typeof value === 'undefined') {
        return msgid;
      } else {
        return (typeof value === 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      const value = django.catalog[singular];
      if (typeof value === 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      let value = django.gettext(context + '\x04' + msgid);
      if (value.includes('\x04')) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      let value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.includes('\x04')) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "Y\u5e74n\u6708j\u65e5 H:i",
    "DATETIME_INPUT_FORMATS": [
      "%Y/%m/%d %H:%M",
      "%Y-%m-%d %H:%M",
      "%Y\u5e74%n\u6708%j\u65e5 %H:%M",
      "%Y/%m/%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S",
      "%Y\u5e74%n\u6708%j\u65e5 %H:%M:%S",
      "%Y/%m/%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y\u5e74%n\u6708%j\u65e5 %H:%n:%S.%f",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "Y\u5e74n\u6708j\u65e5",
    "DATE_INPUT_FORMATS": [
      "%Y/%m/%d",
      "%Y-%m-%d",
      "%Y\u5e74%n\u6708%j\u65e5"
    ],
    "DECIMAL_SEPARATOR": ".",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "m\u6708j\u65e5",
    "NUMBER_GROUPING": 4,
    "SHORT_DATETIME_FORMAT": "Y\u5e74n\u6708j\u65e5 H:i",
    "SHORT_DATE_FORMAT": "Y\u5e74n\u6708j\u65e5",
    "THOUSAND_SEPARATOR": "",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M",
      "%H:%M:%S",
      "%H:%M:%S.%f"
    ],
    "YEAR_MONTH_FORMAT": "Y\u5e74n\u6708"
  };

    django.get_format = function(format_type) {
      const value = django.formats[format_type];
      if (typeof value === 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }
};

