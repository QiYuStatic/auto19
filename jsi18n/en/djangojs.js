

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(count) { return (count == 1) ? 0 : 1; };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "JumpHost\u0004\u5821\u5792\u673aSSH\u5bc6\u94a5": "Private Key",
    "JumpHost\u0004\u8d26\u53f7": "Username",
    "JumpHost\u0004\u8fde\u63a5\u5821\u5792\u670d\u52a1\u5668\u4f7f\u7528\u7684SSH\u5bc6\u94a5, \u5f53\u524d\u4ec5\u652f\u6301 SSH \u8bc1\u4e66\u8ba4\u8bc1": "The ssh private key used to connect jump server.",
    "JumpHost\u0004\u8fde\u63a5\u5821\u5792\u670d\u52a1\u5668\u4f7f\u7528\u7684\u8d26\u53f7": "The username used to connect the jump host",
    "OS\u0004\u5df2\u6d4b\u8bd5\u7684\u7cfb\u7edf": "Tested OS",
    "OS\u0004\u67b6\u6784": "Arch",
    "OS\u0004\u7248\u672c": "Version",
    "SSH\u0004SSH \u8fde\u63a5\u670d\u52a1\u5668\u4f7f\u7528\u7684\u79c1\u94a5\u8bc1\u4e66\u3002 \u6ce8\u610f: \u8bc1\u4e66\u4e0d\u5141\u8bb8\u5bc6\u7801": "The private key certificate used by the SSH connection server. Note: The certificate must have no password protection.",
    "SSH\u0004known hosts": "known hosts",
    "SSH\u0004known hosts \u53ef\u4ee5\u6709\u6548\u9632\u6b62 DNS/IP \u52ab\u6301\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528 ssh-keyscan \u83b7\u53d6\u60a8\u670d\u52a1\u5668\u7684 known_host \u914d\u7f6e": "known hosts can be effective in preventing DNS/IP hijacking. You can use ssh-keyscan to get the known host of your server",
    "SSH\u0004\u5821\u5792\u673a\u914d\u7f6e": "Jump Server Configuration",
    "SSH\u0004\u5982\u679c\u4e0d\u9700\u8981\u4f7f\u7528\u5821\u5792\u673a\u8fde\u63a5\u60a8\u7684\u670d\u52a1\u5668\uff0c\u5ffd\u7565\u6b64\u914d\u7f6e\u5373\u53ef": "Ignore this configuration if you don not need to use jump host",
    "SSH\u0004\u79c1\u94a5\u8bc1\u4e66": "Private Key",
    "SSH\u0004\u9ad8\u7ea7\u914d\u7f6e": "Advanced Configuration",
    "TargetServer\u0004\u5220\u9664": "Delete",
    "TargetServer\u0004\u5bc6\u7801": "Password",
    "TargetServer\u0004\u6700\u591a\u5141\u8bb8 5 \u4e2a\u76ee\u6807\u670d\u52a1\u5668": "Allow up to 5 target server",
    "TargetServer\u0004\u670d\u52a1\u5668": "Server",
    "TargetServer\u0004\u670d\u52a1\u5668\u914d\u7f6e": "Server Configuration",
    "TargetServer\u0004\u6dfb\u52a0\u670d\u52a1\u5668": "Add new server",
    "TargetServer\u0004\u8d26\u53f7": "Username",
    "TargetServer\u0004\u8fde\u63a5\u76ee\u6807\u670d\u52a1\u5668\u4f7f\u7528\u7684\u5bc6\u7801[\u5982\u679c\u60a8\u4f7f\u7528\u8bc1\u4e66\u8ba4\u8bc1\uff0c\u8bf7\u5230\u9ad8\u7ea7\u914d\u7f6e\u91cc\u9762\u8bbe\u7f6e]\u3002\u5982\u679c\u9700\u8981,\u6b64\u5bc6\u7801\u4f1a\u4f5c\u4e3a sudo \u65f6\u4f7f\u7528\u7684\u5bc6\u7801": "The password used to connect to the target server [if you are using certificate authentication, please set it in the advanced configuration]. If needed, this password will be used as the password for sudo",
    "TargetServer\u0004\u8fde\u63a5\u76ee\u6807\u670d\u52a1\u5668\u4f7f\u7528\u7684\u8d26\u53f7": "The username used to connect the server",
    "auto_dt\u0004#### \u5916\u90e8\u6570\u636e\u5e93\n\n\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\u670d\u52a1\u5668\u4f7f\u7528\u7684\u5bc6\u7801\n\n#### Docker \u6570\u636e\u5e93\n\n* \u53ef\u4ee5\u4e0d\u7528\u8bbe\u7f6e\u6b64\u503c (\u7cfb\u7edf\u4e3a\u4e3a\u60a8\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u5b89\u5168\u7684\u5bc6\u7801)\n* \u8fd9\u4e2a\u5bc6\u7801\u4e5f\u4f1a\u4f5c\u4e3a PostgreSQL \u7ba1\u7406\u5458\u7684\u5bc6\u7801": "#### \u5916\u90e8\u6570\u636e\u5e93\n\n\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\u670d\u52a1\u5668\u4f7f\u7528\u7684\u5bc6\u7801\n\n#### Docker \u6570\u636e\u5e93\n\n* \u53ef\u4ee5\u4e0d\u7528\u8bbe\u7f6e\u6b64\u503c (\u7cfb\u7edf\u4e3a\u4e3a\u60a8\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u5b89\u5168\u7684\u5bc6\u7801)\n* \u8fd9\u4e2a\u5bc6\u7801\u4e5f\u4f1a\u4f5c\u4e3a PostgreSQL \u7ba1\u7406\u5458\u7684\u5bc6\u7801",
    "auto_dt\u0004#### \u5916\u90e8\u6570\u636e\u5e93\n\n\u9700\u8981\u4f7f\u7528\u7684 PostgreSQL \u6570\u636e\u5e93\u540d\u79f0\n\n#### Docker \u6570\u636e\u5e93\n\n\u4f1a\u81ea\u52a8\u521b\u5efa\u6b64\u6570\u636e\u5e93.\n\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u6b64\u503c\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u548c \u8d26\u53f7 \u540c\u540d\u7684\u6570\u636e\u5e93\u3002": "#### External Database\n\nPostgreSQL database name\n\n#### Docker Database\n\nDatabase will be created automatic.",
    "auto_dt\u0004#### \u5916\u90e8\u6570\u636e\u5e93\n\u6b64\u8d26\u53f7\u5fc5\u987b\u5df2\u7ecf\u5b58\u5728\u3002\n\n#### Docker \u6570\u636e\u5e93\n\u6b64\u914d\u7f6e\u548c PostgreSQL \u5bc6\u7801\u4e00\u8d77\u4f7f\u7528\uff0c\u4f1a\u81ea\u52a8\u7ed9\u60a8\u521b\u5efa\u6b64\u8d26\u53f7\uff0c\u5e76\u4e14\u6388\u4e0e\u8d85\u7ea7\u7ba1\u7406\u5458\u6743\u9650\u3002": "#### \u5916\u90e8\u6570\u636e\u5e93\n\u6b64\u8d26\u53f7\u5fc5\u987b\u5df2\u7ecf\u5b58\u5728\u3002\n\n#### Docker \u6570\u636e\u5e93\n\u6b64\u914d\u7f6e\u548c PostgreSQL \u5bc6\u7801\u4e00\u8d77\u4f7f\u7528\uff0c\u4f1a\u81ea\u52a8\u7ed9\u60a8\u521b\u5efa\u6b64\u8d26\u53f7\uff0c\u5e76\u4e14\u6388\u4e0e\u8d85\u7ea7\u7ba1\u7406\u5458\u6743\u9650\u3002",
    "auto_dt\u0004#### \u5916\u90e8\u6570\u636e\u5e93\n\u6ca1\u6709\u4efb\u4f55\u4f5c\u7528\n\n#### Docker \u6570\u636e\u5e93\n\n\u8fd9\u4e2a\u53ef\u9009\u7684\u73af\u5883\u53d8\u91cf\u7528\u4e0e\u5411 PostgreSQL initdb \u53d1\u9001\u53c2\u6570\u3002\n\u5176\u503c\u662f\u4e00\u4e2a\u4ee5\u7a7a\u683c\u5206\u9694\u7684\u53c2\u6570\u5b57\u7b26\u4e32\uff0c\u4f8b\u5982: \"--data-checksums\" \u3002\n": "#### External Database\nNo need to config\n\n#### Docker Database\n\n\u8fd9\u4e2a\u53ef\u9009\u7684\u73af\u5883\u53d8\u91cf\u7528\u4e0e\u5411 PostgreSQL initdb \u53d1\u9001\u53c2\u6570\u3002\n\u5176\u503c\u662f\u4e00\u4e2a\u4ee5\u7a7a\u683c\u5206\u9694\u7684\u53c2\u6570\u5b57\u7b26\u4e32\uff0c\u4f8b\u5982: \"--data-checksums\" \u3002\n",
    "auto_dt\u0004(default: Default): Swift user domain": "(default: Default): Swift user domain",
    "auto_dt\u0004(default: LOGIN): The method used for authentication. Use PLAIN if no authentication is required.": "(default: LOGIN): The method used for authentication. Use PLAIN if no authentication is required.",
    "auto_dt\u0004(default: false): Whether or not Nextcloud should automatically create the Swift container": "(default: false): Whether or not Nextcloud should automatically create the Swift container",
    "auto_dt\u0004(defaults to \"127.0.0.1\", if use mysql this should be the name of the mariadb container)": "(defaults to \"127.0.0.1\", if use mysql this should be the name of the mariadb container)",
    "auto_dt\u0004(defaults to \"root\", this is the name of the database user to use)": "this is the name of the database user to use [default: root]",
    "auto_dt\u0004(defaults to \"~\", this is the password of the database user to use)": "this is the password of the database user to use [default: ~]",
    "auto_dt\u0004(defaults to utf8, this is the database charset to use)": "Character Encoding",
    "auto_dt\u0004(empty by default): Set to ssl to use SSL, or tls to use STARTTLS.": "(empty by default): Set to ssl to use SSL, or tls to use STARTTLS.",
    "auto_dt\u0004(not set by default): Set a different domain for the emails than the domain where Nextcloud is installed.\n": "(not set by default): Set a different domain for the emails than the domain where Nextcloud is installed.\n",
    "auto_dt\u0004(port of the database host)": "(port of the database host)",
    "auto_dt\u0004CDN\u8d44\u6e90URL": "CDN URL",
    "auto_dt\u0004Chatwoot \u5b89\u88c5\u53c2\u6570": "Chatwoot Installation Parameters",
    "auto_dt\u0004Chatwoot \u90ae\u7bb1\u914d\u7f6e": "Email From Address",
    "auto_dt\u0004DHCP key name": "DHCP key name",
    "auto_dt\u0004DHCP key secret": "DHCP key secret",
    "auto_dt\u0004DHCP \u914d\u7f6e": "DHCP Configuration",
    "auto_dt\u0004Docker \u6620\u5c04\u7aef\u53e3": "Docker Mapping Port",
    "auto_dt\u0004Docker \u6620\u5c04\u7aef\u53e3\u3002\n\n\u60a8\u9700\u8981\u901a\u8fc7 Docker \u6620\u5c04\u7684\u7aef\u53e3\u8bbf\u95ee\u6b64\u8f6f\u4ef6\u3002": "Docker Mapping Port\n\nYou need to access this software through the Docker mapping port.",
    "auto_dt\u0004Domain key \u7528\u4e8e\u9a8c\u8bc1 HELO \u8bf7\u6c42\u3002\u4e00\u822c\u4e3a\u7a7a\u503c\u5373\u53ef\u3002\n\u8be6\u60c5\u53c2\u89c1: [wikipedia](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail)": "Domain key is used to verify HELO request\u3002\n[documentation](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail)\n[default: none]",
    "auto_dt\u0004Foreman DHCP Key \u914d\u7f6e": "DHCP Configuration",
    "auto_dt\u0004Foreman OAuth \u914d\u7f6e": "OAuth Configuration",
    "auto_dt\u0004Foreman \u5b89\u88c5\u53c2\u6570": "Foreman Installation Parameters",
    "auto_dt\u0004Foreman \u7ba1\u7406\u5458\u914d\u7f6e": "Foreman Admin Password",
    "auto_dt\u0004Foreman\u7ba1\u7406\u5458\u5bc6\u7801": "Foreman Admin Password",
    "auto_dt\u0004Foreman\u7ba1\u7406\u5458\u8d26\u53f7": "Foreman Admin Username",
    "auto_dt\u0004FreshRSS \u5b89\u88c5\u914d\u7f6e": "FreshRSS Installation Parameters",
    "auto_dt\u0004FreshRSS \u7684\u6570\u636e\u76ee\u5f55\u3002\n\u4e00\u822c\u4e0d\u9700\u8981\u586b\u5199\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa\u3002\n": "FreshRSS data directory\u3002\nAutomatic created if not given\u3002\n",
    "auto_dt\u0004IPv6\u5730\u5740": "IPv6 Address",
    "auto_dt\u0004IPv6\u7f51\u5173": "IPv6 Gateway",
    "auto_dt\u0004Linux \u5206\u7ec4 ID\n\n\u4e00\u822c\u4e0d\u9700\u8981\u6539\u52a8": "Linux group id. No need to change unless you know what you are doing.",
    "auto_dt\u0004Linux \u542f\u7528 TCP BBR": "Linux Enable TCP BBR",
    "auto_dt\u0004Linux \u7528\u6237 ID\n\n\u4e00\u822c\u4e0d\u9700\u8981\u6539\u52a8": "Linux user id. No need to change unless you know what you are doing.",
    "auto_dt\u0004Linux \u7cfb\u7edf TCP \u542f\u7528 BBR": "Linux System Enable tcp_bbr Module",
    "auto_dt\u0004MySQL Root \u5bc6\u7801": "MySQL Root Password",
    "auto_dt\u0004MySQL \u5bc6\u7801": "MySQL Root Password",
    "auto_dt\u0004MySQL \u6570\u636e\u5e93\u540d\u79f0": "Database Name",
    "auto_dt\u0004MySQL \u6570\u636e\u5e93\u914d\u7f6e": "MySQL Database Configuration",
    "auto_dt\u0004MySQL \u670d\u52a1\u5668": "SMTP Server Address",
    "auto_dt\u0004MySQL \u670d\u52a1\u5668\u5730\u5740 (\u9ed8\u8ba4: mysql)": "MySQL Server Address",
    "auto_dt\u0004MySQL \u8d26\u53f7": "MySQL username",
    "auto_dt\u0004MySQL \u8d85\u7ea7\u7ba1\u7406\u5458\u5bc6\u7801,\n\n#### \u5916\u90e8\u6570\u636e\u5e93\n\u4e0d\u9700\u8981\u8bbe\u7f6e\n\n#### Docker \u6570\u636e\u5e93\n\u8fd9\u4e2a\u53d8\u91cf\u662f\u5f3a\u5236\u6027\u7684\uff0c\u5b83\u6307\u5b9a\u4e86\u5c06\u4e3a MySQL \u8d85\u7ea7\u7ba1\u7406\u5458\u5e10\u6237\u8bbe\u7f6e\u7684\u5bc6\u7801\u3002\n(\u9ed8\u8ba4: \u81ea\u52a8\u751f\u6210)": "MySQL Root Password\n\n#### External Database\nNo need this configuration\n\n#### Docker Database\nThis variable is mandatory and specifies the password that will be set for the MySQL root superuser account.\n(default: automatic generate)",
    "auto_dt\u0004MySQL \u914d\u7f6e": "MySQL Configuration",
    "auto_dt\u0004Nextcloud \u5b89\u88c5\u53c2\u6570": "Nextcloud Installation Parameters",
    "auto_dt\u0004Nextcloud \u6570\u636e\u5b58\u50a8\u76ee\u5f55": "Nextcloud data storage directory",
    "auto_dt\u0004Nextcloud \u7ba1\u7406\u5458\u5bc6\u7801": "Nextcloud admin password",
    "auto_dt\u0004Nextcloud \u7ba1\u7406\u5458\u8d26\u53f7": "Nextcloud Admin Account",
    "auto_dt\u0004Nextcloud \u8d85\u7ea7\u7ba1\u7406\u5458\u5bc6\u7801\u3002": "Nextcloud super admin password.",
    "auto_dt\u0004Nextcloud \u8d85\u7ea7\u7ba1\u7406\u5458\u7684\u8d26\u53f7, \u6b64\u8d26\u6237\u5177\u6709 Nextcloud \u670d\u52a1\u6700\u9ad8\u6743\u9650": "The Nextcloud Super Admin account, which has the highest privileges for the Nextcloud service",
    "auto_dt\u0004Nginx Proxy Manager \u5b89\u88c5": "Nginx Proxy Manager Installation",
    "auto_dt\u0004Not required for AWS S3 [\u9ed8\u8ba4: \u5426]": "Not required for AWS S3 [default: false]",
    "auto_dt\u0004OAuth key": "OAuth key",
    "auto_dt\u0004OAuth secret": "OAuth secret",
    "auto_dt\u0004OAuth\u914d\u7f6e": "OAuth Configuration",
    "auto_dt\u0004Ping -- \u670d\u52a1\u5668\u8fde\u901a\u6027\u6d4b\u8bd5": "Ping -- Server Connectivity Test",
    "auto_dt\u0004Ping \u6d4b\u8bd5\u53c2\u6570": "Ping Test Parameters",
    "auto_dt\u0004PostgreSQL \u5bc6\u7801": "PostgreSQL Password",
    "auto_dt\u0004PostgreSQL \u6570\u636e\u5e93\u540d\u79f0": "PostgreSQL Database Name",
    "auto_dt\u0004PostgreSQL \u6570\u636e\u5e93\u914d\u7f6e": "PostgreSQL Database Configuration",
    "auto_dt\u0004PostgreSQL \u670d\u52a1\u5668": "PostgreSQL Server Address",
    "auto_dt\u0004PostgreSQL \u670d\u52a1\u5668\u7684\u5730\u5740\u3002\n\n* \u5982\u679c\u60a8\u8bbe\u7f6e\u4e86\u6b64\u503c, \u5219\u4f1a\u4f7f\u7528\u60a8\u8bbe\u7f6e\u7684\u5916\u90e8\u6570\u636e\u5e93\n* \u5f53\u60a8\u60a8\u6ca1\u6709\u8bbe\u7f6e\u6b64\u503c, \u4f1a\u81ea\u52a8\u7ed9\u60a8\u521b\u5efa PostgreSQL \u6570\u636e\u5e93\n": "PostgreSQL Server Address\n\n* Use external PostgreSQL server if you set this value\n* Automatic create docker PosrgreSQL database otherwise\n",
    "auto_dt\u0004PostgreSQL \u8d26\u53f7": "PostgreSQL Username",
    "auto_dt\u0004PostgreSQL \u914d\u7f6e": "PostgreSQL Configuration",
    "auto_dt\u0004Proxmox \u914d\u7f6e(Kimsufi \u670d\u52a1\u5668)": "Proxmox Configuration (Kimsufi Server)",
    "auto_dt\u0004Proxmox \u914d\u7f6e\u53c2\u6570": "Proxmox Configuration Parameters",
    "auto_dt\u0004RedHat \u4f01\u4e1a\u7248 Linux \u8ba2\u9605\u7ba1\u7406": "RedHat Enterprise Linux Subscription Management",
    "auto_dt\u0004RedHat \u8ba2\u9605\u53c2\u6570": "RedHat Subscription Parameters",
    "auto_dt\u0004Redis \u5bc6\u7801": "Redis Password",
    "auto_dt\u0004Redis \u670d\u52a1\u5668": "Redis Server",
    "auto_dt\u0004Redis \u670d\u52a1\u5668\u5730\u5740": "Redis Server Address",
    "auto_dt\u0004Redis \u670d\u52a1\u5668\u5bc6\u7801 (\u9ed8\u8ba4: \u6ca1\u6709)": "Redis password (default: none)",
    "auto_dt\u0004Redis \u670d\u52a1\u5668\u76d1\u542c\u7aef\u53e3(\u9ed8\u8ba4: 6379)": "Redis Server Listen Port (default: 6379)",
    "auto_dt\u0004Redis \u7aef\u53e3": "Redis Listen Port",
    "auto_dt\u0004Redis \u914d\u7f6e": "Redis Configuration",
    "auto_dt\u0004S3 SSL": "S3 SSL",
    "auto_dt\u0004S3 key": "S3 key",
    "auto_dt\u0004S3 secret": "S3 secret",
    "auto_dt\u0004S3 \u533a\u57df": "S3 Region",
    "auto_dt\u0004S3 \u5b58\u50a8\u6876": "S3 Storage Bucket",
    "auto_dt\u0004S3 \u5b58\u50a8\u914d\u7f6e": "S3 Storage Configuration",
    "auto_dt\u0004S3 \u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\u5668": "S3 Object Storage Server",
    "auto_dt\u0004S3 \u5bf9\u8c61\u5b58\u50a8\u6876\u3002": "S3 object storage bucket",
    "auto_dt\u0004S3 \u5bf9\u8c61\u670d\u52a1\u5668\u4f7f\u7528\u7684\u7aef\u53e3": "The port used to connect the s3 server",
    "auto_dt\u0004S3 \u670d\u52a1\u5668\u5730\u5740": "S3 Server Hostname",
    "auto_dt\u0004S3 \u7aef\u53e3": "S3 Server Listen Port",
    "auto_dt\u0004S3 \u8bbf\u95ee\u4ee4\u724c\u3002": "AWS style S3 access key",
    "auto_dt\u0004S3 \u8bbf\u95ee\u5bc6\u94a5": "S3 Access Key",
    "auto_dt\u0004S3 \u914d\u7f6e": "S3 Configuration",
    "auto_dt\u0004S3_USEPATH_STYLE": "S3_USEPATH_STYLE",
    "auto_dt\u0004S3\u5b58\u50a8\u914d\u7f6e": "S3 Storage Configuration",
    "auto_dt\u0004SMTP SSL/START SSL \u52a0\u5bc6": "Enable SSL/STARTTLS",
    "auto_dt\u0004SMTP \u53d1\u4ef6\u540d\u79f0": "SMTP From Name",
    "auto_dt\u0004SMTP \u53d1\u4ef6\u90ae\u7bb1": "SMTP From Email",
    "auto_dt\u0004SMTP \u5bc6\u7801": "SMTP Password",
    "auto_dt\u0004SMTP \u5bc6\u7801\u9ed8\u8ba4\u4e3a \"~\"": "SMTP password [default: ~]",
    "auto_dt\u0004SMTP \u670d\u52a1\u5668": "SMTP Server Address",
    "auto_dt\u0004SMTP \u670d\u52a1\u5668\u4e3b\u673a": "SMTP server address",
    "auto_dt\u0004SMTP \u7aef\u53e3": "SMTP Port",
    "auto_dt\u0004SMTP \u8d26\u53f7": "SMTP Username",
    "auto_dt\u0004SMTP \u90ae\u4ef6\u914d\u7f6e": "SMTP Mail Configuration",
    "auto_dt\u0004SMTP \u90ae\u7bb1": "SMTP Email",
    "auto_dt\u0004SMTP \u914d\u7f6e": "SMTP Configuration",
    "auto_dt\u0004SQLite \u6570\u636e\u5e93": "SQLite Database",
    "auto_dt\u0004SQLite \u6570\u636e\u5e93\u7684\u540d\u79f0(\u6570\u636e\u4fdd\u5b58\u5728 \u5b89\u88c5\u76ee\u5f55 /html/data/\u4e0b\u9762) Name of the database using sqlite": "The name of the SQLite database (data is stored under the installation directory /html/data/)",
    "auto_dt\u0004SQLite \u6570\u636e\u5e93\u914d\u7f6e": "SQLite Configuration",
    "auto_dt\u0004SWIFT_AUTOCREATE": "SWIFT_AUTOCREATE",
    "auto_dt\u0004SWIFT_USER_DOMAIN": "SWIFT_USER_DOMAIN",
    "auto_dt\u0004SWIFT_USER_NAME": "SWIFT_USER_NAME",
    "auto_dt\u0004SWIFT_USER_PASSWORD": "SWIFT_USER_PASSWORD",
    "auto_dt\u0004Sentry DSN": "Sentry DSN",
    "auto_dt\u0004Sentry \u6570\u636e\u6e90\u540d\u79f0(\u9ed8\u8ba4\u4e0d\u9700\u8981\u914d\u7f6e)": "Sentry data source name [default: none]",
    "auto_dt\u0004Swift URL": "Swift URL",
    "auto_dt\u0004Swift container (bucket) that Nextcloud should store the data in": "Swift container (bucket) that Nextcloud should store the data in",
    "auto_dt\u0004Swift endpoint region": "Swift endpoint region",
    "auto_dt\u0004Swift project domain [default: Default]": "Swift project domain [default: Default]",
    "auto_dt\u0004Swift project name": "Swift project name",
    "auto_dt\u0004Swift service name [default: swift]": "Swift service name [default: swift]",
    "auto_dt\u0004Swift user password": "Swift user password",
    "auto_dt\u0004Swift username": "Swift username",
    "auto_dt\u0004Swift \u5b58\u50a8\u914d\u7f6e": "Swift Storage Configuration",
    "auto_dt\u0004Swift \u5bb9\u5668\u540d\u79f0": "Swift Container Name",
    "auto_dt\u0004Swift \u670d\u52a1\u533a\u57df": "Swift Service Region",
    "auto_dt\u0004Swift \u670d\u52a1\u540d\u79f0": "Swift Service Name",
    "auto_dt\u0004Swift \u914d\u7f6e": "Swift Configuration",
    "auto_dt\u0004Swift \u9879\u76ee\u540d\u79f0": "Swift Project Name",
    "auto_dt\u0004Swift \u9879\u76ee\u57df\u540d": "Swift Project Domain",
    "auto_dt\u0004Swift\u5b58\u50a8\u914d\u7f6e": "Swift Storage Configuration",
    "auto_dt\u0004Syncthing \u5b89\u88c5\u914d\u7f6e": "Syncthing Installation Configuration",
    "auto_dt\u0004The Swift identity (Keystone) endpoint": "The Swift identity (Keystone) endpoint",
    "auto_dt\u0004The region that the S3 bucket resides in.": "The region that the S3 bucket resides in.",
    "auto_dt\u0004UPDATE": "Auto Update",
    "auto_dt\u0004Vaultwarden \u5b89\u88c5\u53c2\u6570": "Vaultwarden Installation Parameters",
    "auto_dt\u0004Whether or not SSL/TLS should be used to communicate with object storage server [\u9ed8\u8ba4: \u662f]": "Whether or not SSL/TLS should be used to communicate with object storage server [default: yes]",
    "auto_dt\u0004WordPress \u4f7f\u7528\u4e2d\u6587": "WordPress Use Chinese",
    "auto_dt\u0004WordPress \u4f7f\u7528\u7684\u8868\u524d\u7f00": "WordPress Table Prefix",
    "auto_dt\u0004WordPress \u5b89\u5168\u914d\u7f6e": "WordPress Security Configuration",
    "auto_dt\u0004WordPress \u7ba1\u7406\u5458\u5bc6\u7801": "The password you use to manage the WordPress site",
    "auto_dt\u0004WordPress \u7ba1\u7406\u5458\u8d26\u53f7": "WordPress Admin Username",
    "auto_dt\u0004WordPress \u7ba1\u7406\u5458\u90ae\u7bb1": "WordPress Admin Email",
    "auto_dt\u0004WordPress \u7f51\u7ad9URL": "WordPress Website URL",
    "auto_dt\u0004WordPress \u7f51\u7ad9\u6807\u9898": "WordPress Site Title",
    "auto_dt\u0004WordPress \u7f51\u7ad9\u7684\u6807\u9898\n\n\u4f8b\u5982: \"\u53c8\u4e00\u4e2aWordPress\u7ad9\u70b9\"": "WordPress Website Title\n\neg: \"Another WordPress Site\"",
    "auto_dt\u0004WordPress \u7f51\u7ad9\u914d\u7f6e": "WordPress Website Configuration",
    "auto_dt\u0004WordPress \u914d\u7f6e": "WordPress Configuration",
    "auto_dt\u0004WordPress \u9ed8\u8ba4\u5b89\u88c5\u4e3a \u82f1\u6587\u8bed\u8a00, \u4f7f\u7528\u6b64\u9009\u9879\u66f4\u6539\u4e3a\u4e2d\u6587\u8bed\u8a00": "WordPress default language is English.\nUse this option to change the language to Chinese",
    "auto_dt\u0004access.redhat.com \u6216\u8005 Sat6 \u7684\u8d26\u53f7\u540d\u79f0": "access.redhat.com or the Sat6 username name",
    "auto_dt\u0004access.redhat.com \u6216\u8005 Sat6 \u7684\u8d26\u53f7\u5bc6\u7801": "access.redhat.com or the Sat6 password",
    "auto_dt\u0004array \u6570\u636e\u7c7b\u578b": "array data type",
    "auto_dt\u0004array\u503c": "array value",
    "auto_dt\u0004auth_key": "auth_key",
    "auto_dt\u0004auth_salt": "auth_salt",
    "auto_dt\u0004chatwoot \u90ae\u7bb1\u914d\u7f6e": "Chatwoot Email Configuration",
    "auto_dt\u0004int\u503c": "int value",
    "auto_dt\u0004logged_in_key": "logged_in_key",
    "auto_dt\u0004logged_in_salt": "logged_in_salt",
    "auto_dt\u0004nextcloud \u7528\u4e8e\u5b58\u50a8\u7528\u6237\u6240\u6709\u6570\u636e\u7684\u76ee\u5f55\u3002[\u9ed8\u8ba4: /var/www/html/data]\n\n:warning: \u6ce8\u610f\u8fd9\u4e2a\u914d\u7f6e\u4f7f\u7528\u7684\u662f\u4e3b\u673a\u4e0a\u7684\u76ee\u5f55\n": "The directory used to store all Nextcloud user data.\n:warning: Note that this configuration uses the directory on the host\n",
    "auto_dt\u0004nonce_key": "nonce_key",
    "auto_dt\u0004nonce_salt": "nonce_salt",
    "auto_dt\u0004secure_auth_key": "secure_auth_key",
    "auto_dt\u0004secure_auth_salt": "secure_auth_salt",
    "auto_dt\u0004the SMTP": "The username use to login SMTP server",
    "auto_dt\u0004the address wallabag uses for outgoing emails": "the address wallabag uses for outgoing emails",
    "auto_dt\u0004to \"symfony\", this is the name of the database to use)": "to \"symfony\", this is the name of the database to use)",
    "auto_dt\u0004vaultwarden \u90ae\u7bb1\u914d\u7f6e": "vaultwarden Email Configuration",
    "auto_dt\u0004wallabag Redis\u914d\u7f6e": "wallabag Redis Configuration",
    "auto_dt\u0004wallabag \u53cc\u91cd\u8eab\u4efd\u8ba4\u8bc1": "wallabag 2FA",
    "auto_dt\u0004wallabag \u5b89\u88c5\u914d\u7f6e": "wallabag Install Configuration",
    "auto_dt\u0004wallabag \u5bc6\u7801": "wallabag password",
    "auto_dt\u0004wallabag \u6570\u636e\u5e93\u914d\u7f6e": "wallabag Database Configuration",
    "auto_dt\u0004wallabag \u7528\u6237\u914d\u7f6e": "wallabag User Configuration",
    "auto_dt\u0004wallabag \u8d26\u53f7": "wallabag usernmae",
    "auto_dt\u0004wallabag \u8d26\u53f7\u7684\u90ae\u7bb1(\u627e\u56de\u5bc6\u7801\u9700\u8981\u4f7f\u7528)": "wallabag account email is required to retrieve/reset password",
    "auto_dt\u0004wallabag \u8d26\u53f7\u90ae\u7bb1": "wallabag Account Email",
    "auto_dt\u0004wallabag \u90ae\u7bb1\u914d\u7f6e": "wallabag Email Configuration",
    "auto_dt\u0004wallbag \u5b9e\u4f8b\u540d\u79f0": "wallbag Instance Name",
    "auto_dt\u0004\u4e0d\u8fdb\u884c\u64cd\u4f5c\u7cfb\u7edf\u7684\u68c0\u6d4b\u3002\u5982\u679c\u60a8\u786e\u4fe1\u4f60\u7684\u7cfb\u7edf\u6ee1\u8db3\u6b64\u4efb\u52a1\u7684\u8981\u6c42\uff0c\u5e76\u4e14\u60a8\u7684\u7cfb\u7edf\u4e0d\u5728\u5df2\u6d4b\u8bd5\u5217\u8868\u4e2d\uff0c\u5219\u9009\u62e9\u6b64\u9009\u9879\u4ee5\u8df3\u8fc7\u64cd\u4f5c\u7cfb\u7edf\u7684\u68c0\u6d4b.": "If you are sure that your system meets the requirements for this task and your system is not in the tested list, select this option to skip the operating system detection.",
    "auto_dt\u0004\u4f7f\u7528\u4e3b\u673a\u7f51\u7edc": "Use Host Network",
    "auto_dt\u0004\u4f7f\u7528\u6307\u5b9a\u7684\u6570\u636e\u76ee\u5f55\u7ed9 Syncthing \u4f7f\u7528\u3002\n\u5982\u679c\u60a8\u6ca1\u6709\u6570\u636e\u9700\u8981\u63d0\u4f9b\u7ed9 Syncthing \u4f7f\u7528 \u5219\u53ef\u4ee5\u4e0d\u6307\u5b9a": "Use the specified data directory for Syncthing to use.\nIf you have no data provide to Syncthing, you may not specify",
    "auto_dt\u0004\u4f7f\u7528\u9ed8\u8ba4\u503c\uff0c\u7cfb\u7edf\u4f1a\u4e3a\u60a8\u81ea\u52a8\u751f\u6210\u5b89\u5168\u7684\u503c": "The system will automatically generate safe values for you",
    "auto_dt\u0004\u4f8b\u5982: https://wp.example.com": "eg: https://wp.example.com",
    "auto_dt\u0004\u4fe1\u4efb\u57df\u540d": "Trusted Domains",
    "auto_dt\u0004\u5141\u8bb8\u6ce8\u518c": "Public registration is allowed",
    "auto_dt\u0004\u521b\u5efa\u6570\u636e\u5e93": "Create Database",
    "auto_dt\u0004\u53cc\u91cd\u8eab\u4efd\u8ba4\u8bc1": "Enable 2FA",
    "auto_dt\u0004\u53cc\u91cd\u8eab\u4efd\u8ba4\u8bc1\u90ae\u7bb1": "2FA Email",
    "auto_dt\u0004\u53d1\u4ef6\u4eba\u90ae\u7bb1\u901a\u5e38\u662f\u60a8\u7684\u90ae\u7bb1\u8d26\u53f7\u3002\n\n\u4f8b\u5982: \"\u7ba1\u7406\u5458 <admin@example.com>\" \u4e2d\u7684 \"admin@example.com\"": "\u53d1\u4ef6\u4eba\u90ae\u7bb1\u901a\u5e38\u662f\u60a8\u7684\u90ae\u7bb1\u8d26\u53f7\u3002\n\n\u4f8b\u5982: \"\u7ba1\u7406\u5458 <admin@example.com>\" \u4e2d\u7684 \"admin@example.com\"",
    "auto_dt\u0004\u53d1\u9001\u6fc0\u6d3b\u90ae\u4ef6\u7684\u90ae\u7bb1": "Email address for sending activation email",
    "auto_dt\u0004\u53d1\u9001\u90ae\u4ef6\u542f\u7528 SSL/STARTTLS \u52a0\u5bc6\u3002\n\n\u6ce8\u610f: *\u90e8\u5206\u90ae\u7bb1\u53d1\u9001\u5546\u4e0d\u652f\u6301\u6b64\u914d\u7f6e*": "Enable SSL/STARTTLS encryption for sending emails \n:warning: Some mailbox senders do not support this configuration.",
    "auto_dt\u0004\u542f\u7528JUnit": "Enable JUnit",
    "auto_dt\u0004\u542f\u7528Junit\u5206\u6790,\u6b64\u9009\u9879\u4ec5\u63d0\u4f9b\u7ed9\u5f00\u53d1\u8005\u4f7f\u7528\uff0c\u7528\u4e8e\u5206\u6790\u95ee\u9898[\u9ed8\u8ba4:\u5173\u95ed]": "Enable Junit analysis, this option is for developers use to analyze issues [default: off]",
    "auto_dt\u0004\u542f\u7528\u53cc\u91cd\u8eab\u4efd\u8ba4\u8bc1": "Enable 2FA",
    "auto_dt\u0004\u542f\u7528\u7ad9\u70b9\u914d\u7f6e": "Enable Site Configuration",
    "auto_dt\u0004\u57df\u540d": "Domain",
    "auto_dt\u0004\u5982\u679c\u60a8\u6709\u5916\u90e8\u7684 Redis \u5219\u53ef\u4ee5\u4f7f\u7528\u6b64\u914d\u7f6e": "You can use your external Redis instance if you have one.",
    "auto_dt\u0004\u5982\u679c\u60a8\u6ca1\u6709\u6253\u5f00\u6b64\u9009\u9879\uff0c\u5219\u4e0d\u4f7f\u7528\u7ad9\u70b9\u914d\u7f6e": "If you do not turn this option on, the site configuration will not used",
    "auto_dt\u0004\u5982\u679c\u60a8\u7684\u670d\u52a1\u5668\u6ca1\u6709 IPv6 \u5730\u5740, \u5219\u8bf7\u7981\u7528 IPv6": "Disable if your server not support IPv6",
    "auto_dt\u0004\u5982\u679c\u6709\u591a\u4e2a\u57df\u540d\uff0c\u8bf7\u4f7f\u7528 \u7a7a\u683c \u5206\u5272 [\u9ed8\u8ba4: \u6ca1\u6709]": "If you have multiple domains, use spaces to split them [default: none]",
    "auto_dt\u0004\u5b89\u5168\u6a21\u5f0f": "Enable SSL",
    "auto_dt\u0004\u5b89\u5168\u914d\u7f6e": "Security Configurations",
    "auto_dt\u0004\u5b89\u88c5 Chatwoot": "Install Chatwoot",
    "auto_dt\u0004\u5b89\u88c5 FreshRSS": "Install FreshRSS",
    "auto_dt\u0004\u5b89\u88c5 Nginx Proxy Manager": "Install Nginx Proxy Manager",
    "auto_dt\u0004\u5b89\u88c5 Syncthing": "Install Syncthing",
    "auto_dt\u0004\u5b89\u88c5 WordPress (v2)": "Install WordPress (v2)",
    "auto_dt\u0004\u5b89\u88c5 foreman": "Install foreman",
    "auto_dt\u0004\u5b89\u88c5 vaultwarden": "Install vaultwarden",
    "auto_dt\u0004\u5b89\u88c5 wallabag": "Install wallabag",
    "auto_dt\u0004\u5b89\u88c5\u4e2d\u6587\u7248": "Install Chinese Version",
    "auto_dt\u0004\u5b89\u88c5\u5b9d\u5854\u9762\u677f": "Install aaPanel",
    "auto_dt\u0004\u5b89\u88c5\u76ee\u5f55": "Installation Directory",
    "auto_dt\u0004\u5b9d\u5854\u9762\u677f\u5b89\u88c5\u53c2\u6570": "aaPanel Installation Parameters",
    "auto_dt\u0004\u5b9d\u5854\u9762\u677f\u91cd\u7f6e\u5bc6\u7801\u53c2\u6570": "aaPanel Reset Password Parameters",
    "auto_dt\u0004\u5bc6\u7801": "Password",
    "auto_dt\u0004\u60a8\u670d\u52a1\u5668\u7684 IPv6 \u7f51\u5173:\n\u5982\u679c\u60a8\u7684IP\u5730\u5740\u4e3a: XXXX:XXXX:XXXX:XXYY:YYYY:YYYY:YYYY:YYYY\n\u5219 Kimsufi \u670d\u52a1\u5668\u7684\u7f51\u5173\u4e00\u822c\u4e3a: XXXX:XXXX:XXXX:XXFF:FF:FF:FF:FF\n": "\u60a8\u670d\u52a1\u5668\u7684 IPv6 \u7f51\u5173:\n    \u5982\u679c\u60a8\u7684IP\u5730\u5740\u4e3a: XXXX:XXXX:XXXX:XXYY:YYYY:YYYY:YYYY:YYYY\n    \u5219 Kimsufi \u670d\u52a1\u5668\u7684\u7f51\u5173\u4e00\u822c\u4e3a: XXXX:XXXX:XXXX:XXFF:FF:FF:FF:FF\n",
    "auto_dt\u0004\u60a8\u767b\u5f55 WordPress \u540e\u53f0\u4f7f\u7528\u7684\u5bc6\u7801\u3010\u6ca1\u6709\u8bbe\u7f6e\u5219\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u5b89\u5168\u5bc6\u7801\u3011": "The password you use to manage the WordPress site. [default: automatic generated]",
    "auto_dt\u0004\u60a8\u767b\u5f55 WordPress \u540e\u53f0\u4f7f\u7528\u7684\u8d26\u53f7": "The username you use to manage the WordPress site",
    "auto_dt\u0004\u60a8\u7684\u57df\u540d": "Your Domain",
    "auto_dt\u0004\u60a8\u7684\u90ae\u7bb1\u540d\u79f0.\n\n\u4f8b\u5982: \"\u7ba1\u7406\u5458 <admin@example.com>\" \u4e2d\u7684 \"\u7ba1\u7406\u5458\"": "Your email name, for example: Admin in 'Admin <admin@qiyutech.tech>'Your email name.\n\nfor example: \"admin\" in \"admin <admin@example.com>\"",
    "auto_dt\u0004\u6570\u636e\u5e93\u521d\u59cb\u5316\u53c2\u6570": "Database Initialization Parameters",
    "auto_dt\u0004\u6570\u636e\u5e93\u540d\u79f0": "Database Name",
    "auto_dt\u0004\u6570\u636e\u5e93\u5bc6\u7801": "Postgres Database Password",
    "auto_dt\u0004\u6570\u636e\u5e93\u5f15\u64ce": "Database Engine",
    "auto_dt\u0004\u6570\u636e\u5e93\u7aef\u53e3": "Database Server Port",
    "auto_dt\u0004\u6570\u636e\u5e93\u8d26\u53f7": "Database Username",
    "auto_dt\u0004\u6570\u636e\u5e93\u9009\u62e9": "Select Database",
    "auto_dt\u0004\u6570\u636e\u5e93\u914d\u7f6e": "Database Configuration",
    "auto_dt\u0004\u6570\u636e\u76ee\u5f55": "Data Directory",
    "auto_dt\u0004\u65b0\u5bc6\u7801": "New Password",
    "auto_dt\u0004\u65b0\u7684\u5b9d\u5854\u9762\u677f\u767b\u5f55\u5bc6\u7801": "New Password for aaPanel",
    "auto_dt\u0004\u65b0\u7684\u5b9d\u5854\u9762\u677f\u767b\u5f55\u8d26\u53f7": "New Username for aaPanel",
    "auto_dt\u0004\u65b0\u8d26\u53f7": "New Username",
    "auto_dt\u0004\u65f6\u533a": "Time Zone",
    "auto_dt\u0004\u65f6\u533a\u8bbe\u7f6e": "Time zone config",
    "auto_dt\u0004\u662f\u5426\u542f\u7528\u66f4\u65b0 [\u9ed8\u8ba4: \u5426]": "Whether to enable updates [Default: No]",
    "auto_dt\u0004\u662f\u5426\u81ea\u52a8\u4ece\u8d26\u53f7\u4e2d\u83b7\u53d6\u53ef\u7528\u7684 RedHat \u8ba2\u9605": "Upon successful registration, auto-consume available subscriptions",
    "auto_dt\u0004\u662f\u5426\u9700\u8981\u521b\u5efa\u6570\u636e\u5e93\u3002(\u5982\u679c\u60a8\u7684\u6570\u636e\u5e93\u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u4e0d\u9700\u8981\u521b\u5efa)": "Do you need to create a database ?",
    "auto_dt\u0004\u670d\u52a1\u5668\u7684\u7f51\u5361\u540d\u79f0,\u4e00\u822c\u4e3a eth1 \u6216 eno1, \u8f93\u5165\u9519\u8bef\u4f1a\u5bfc\u81f4\u7f51\u7edc\u914d\u7f6e\u5931\u8d25": "The server's NIC name, usually eth1 or eno1\nThe task will be failed if you NIC name is incorrectly.",
    "auto_dt\u0004\u673a\u5bc6": "Secret",
    "auto_dt\u0004\u6b64\u8f6f\u4ef6\u5b89\u88c5\u5230\u76ee\u6807\u670d\u52a1\u5668\u7684\u6587\u4ef6\u5939, \u8fd9\u4e2a\u6587\u4ef6\u5939\u6700\u597d\u5f53\u524d\u4e3a\u7a7a\u6216\u4e0d\u5b58\u5728(\u9632\u6b62\u8986\u76d6\u6587\u4ef6)\u3002\n\n\u6ce8\u610f: \u5982\u679c\u6307\u5b9a\u7684\u6587\u4ef6\u5939\u4e0d\u5b58\u5728\u5219\u4f1a\u81ea\u52a8\u521b\u5efa\u3002": "The software is installed into the target server directory, and it is best to ensure that this directory is currently empty.If the directory does not exist, it will be created automatically.",
    "auto_dt\u0004\u6ce8\u518c\u662f\u5426\u9700\u8981\u53d1\u9001\u786e\u8ba4\u90ae\u4ef6": "Send confirm email to user when registration",
    "auto_dt\u0004\u6d4b\u8bd5\u4efb\u52a1\u53c2\u6570": "Test Task Parameters",
    "auto_dt\u0004\u6d4b\u8bd5\u793a\u4f8b": "Test Demo",
    "auto_dt\u0004\u6d4f\u89c8\u5668\u8bbf\u95eeURL": "The url you use to visit the Chatwoot instance",
    "auto_dt\u0004\u6fc0\u6d3b/\u6ce8\u9500": "Activation/Deactivation",
    "auto_dt\u0004\u7528\u6237ID": "Linux user id",
    "auto_dt\u0004\u7535\u5b50\u90ae\u7bb1\u914d\u7f6e": "Email Configuration",
    "auto_dt\u0004\u7981\u7528IPv6": "Disable IPv6",
    "auto_dt\u0004\u79fb\u9664\u5f3a\u5236\u7ed1\u5b9a\u8d26\u53f7": "Remove force bind aaPanel account",
    "auto_dt\u0004\u79fb\u9664\u9700\u8981\u5f3a\u5236\u7ed1\u5b9a\u5b9d\u5854\u8d26\u53f7(\u4ec5\u5bf9\u4e2d\u6587\u7248\u6709\u6548)\u3002\n\n\u6ce8\u610f:\n\n    \u5f3a\u5236\u79fb\u9664\u7ed1\u5b9a\u6709\u53ef\u80fd\u5bfc\u81f4\u5b9d\u5854\u90e8\u5206\u529f\u80fd\u65e0\u6cd5\u4f7f\u7528\n": "Remove force bind aaPanel account(Only for Chinese Version)\u3002\n\nWARNING:\n\n    Some function may not be usable if force remove bind aaPanel account.\n\n",
    "auto_dt\u0004\u7ad9\u70b9\u914d\u7f6e": "Site Configuration",
    "auto_dt\u0004\u7ba1\u7406\u5458\u4ee4\u724c": "Admin Token",
    "auto_dt\u0004\u7ba1\u7406\u5458\u8d26\u53f7\u914d\u7f6e": "Admin User Configuration",
    "auto_dt\u0004\u7cfb\u7edf\u53c2\u6570": "System Parameters",
    "auto_dt\u0004\u7cfb\u7edf\u9ed8\u8ba4\u8bed\u8a00": "System default language",
    "auto_dt\u0004\u7ec4ID": "Linux Group ID",
    "auto_dt\u0004\u7ec4\u7ec7\u540d\u79f0": "Organization Name",
    "auto_dt\u0004\u7ed3\u6784\u4f53": "struct",
    "auto_dt\u0004\u7ed9\u60a8\u7684 wallabag \u5b9e\u4f8b\u8d77\u4e00\u4e2a\u65b9\u4fbf\u8bb0\u5fc6\u7684\u540d\u79f0(\u53cc\u91cd\u8eab\u4efd\u8ba4\u8bc1\u4f1a\u4f7f\u7528\u6b64\u540d\u79f0)": "Give your wallabag instance a name that is human friendly(2FA will use this name)",
    "auto_dt\u0004\u7f51\u5361\u540d\u79f0": "NIC Name",
    "auto_dt\u0004\u81ea\u52a8\u83b7\u53d6\u53ef\u7528\u7684\u8ba2\u9605": "Automatic fetching of available subscriptions",
    "auto_dt\u0004\u8bbe\u7f6e\u5b9d\u5854\u9762\u677f\u5bc6\u7801": "Reset aaPanel Password",
    "auto_dt\u0004\u8bbf\u95ee Redis \u7684\u5bc6\u7801": "The password used to access Redis server.",
    "auto_dt\u0004\u8bbf\u95ee\u7f51\u5740": "\u8bbf\u95ee\u7f51\u5740",
    "auto_dt\u0004\u8bed\u8a00": "Language",
    "auto_dt\u0004\u8c03\u8bd5\u6a21\u5f0f": "Enable Debug",
    "auto_dt\u0004\u8d26\u53f7": "Username",
    "auto_dt\u0004\u8df3\u8fc7\u7cfb\u7edf\u68c0\u6d4b": "Skip Tested System Detection",
    "auto_dt\u0004\u8fd9\u91cc\u9700\u8981\u586b\u5199\u7684\u662f\u60a8\u7684 IPv6 \u5730\u5740\u548c\u5b50\u7f51\u63a9\u7801\u3002 \u4f8b\u5982: xxxx:xxxx:xxxx:xxxx::1/64": "\u8fd9\u91cc\u9700\u8981\u586b\u5199\u7684\u662f\u60a8\u7684 IPv6 \u5730\u5740\u548c\u5b50\u7f51\u63a9\u7801\u3002 \u4f8b\u5982: xxxx:xxxx:xxxx:xxxx::1/64",
    "auto_dt\u0004\u8fde\u63a5 MySQL \u6570\u636e\u5e93\u4f7f\u7528\u7684\u5bc6\u7801\u3002\n\n#### Docker \u6570\u636e\u5e93\n\n\u6b64 \u5bc6\u7801 \u548c \u8d26\u6237\u4f1a\u88ab\u81ea\u52a8\u521b\u5efa\u3002\n": "The username use for connection MySQL server.\n\n#### Docker Database\n\nUsername and password will automatic create\u3002\n",
    "auto_dt\u0004\u8fde\u63a5 MySQL \u6570\u636e\u5e93\u4f7f\u7528\u7684\u8d26\u53f7\u3002\n\n#### \u5916\u90e8\u6570\u636e\u5e93\n\n\u5f53\u60a8\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5e93\u65f6\uff0c\u8fd9\u4e2a\u8d26\u53f7\u5fc5\u987b\u5df2\u7ecf\u5b58\u5728\u3002\n\n#### Docker \u6570\u636e\u5e93\n\n\u8fd9\u4e2a\u7528\u6237\u4f1a\u88ab\u81ea\u52a8\u521b\u5efa\u3002\n": "The username use for connection MySQL server.\n\n#### External Database\n\nThe user must be exists and have sufficient permission.\n\n#### Docker Database\n\nThe username will create automatic\u3002\n",
    "auto_dt\u0004\u9009\u62e9\u7c7b\u578b": "Select Type",
    "auto_dt\u0004\u9009\u62e9\u8981\u4f7f\u7528\u7684\u6570\u636e\u5e93(\u5bf9\u4e8e\u4e2a\u4eba\u4f7f\u7528\u573a\u666f\uff0c\u5efa\u8bae\u4f7f\u7528 SQLite, \u5176\u4ed6\u573a\u666f\u5efa\u8bae\u4f7f\u7528 PostgreSQL)": "Select the database to be used (for personal use scenarios, SQLite is recommended, for other scenarios PostgreSQL is recommended)",
    "auto_dt\u0004\u90ae\u7bb1\u57df\u540d": "Email Domain",
    "auto_dt\u0004\u90ae\u7bb1\u786e\u8ba4": "Email Confirmation",
    "auto_dt\u0004\u914d\u7f6e Chatwoot \u90ae\u7bb1\u53d1\u9001": "The address Chatwoot use for send external email",
    "auto_dt\u0004\u9700\u8981\u4f7f\u7528/\u521b\u5efa\u7684 MySQL \u6570\u636e\u5e93\u540d\u79f0\u3002\n\n#### \u5916\u90e8\u6570\u636e\u5e93\n\n\u8fd9\u4e2a\u6570\u636e\u5e93\u5fc5\u987b\u5df2\u7ecf\u5b58\u5728\u3002\n\n#### Docker \u6570\u636e\u5e93\n\n\u8fd9\u4e2a\u6570\u636e\u5e93\u4f1a\u88ab\u81ea\u52a8\u521b\u5efa\u3002\n": "The MySQL database to use/create\u3002\n\n#### External Database\n\nThis database must be exists\u3002\n\n#### Docker Database\n\nDatabase will create automatic\u3002\n",
    "auto_dt\u0004\u989d\u5916\u8f93\u51fa\u8c03\u8bd5\u65e5\u5fd7, \u6ce8\u610f: \u8fd9\u4ec5\u4ec5\u5728\u5185\u90e8\u6d4b\u8bd5\u65f6\u4f7f\u7528": "Additional output for debug logging. Note: This is only for internal use",
    "auto_dt\u0004\u989d\u5916\u914d\u7f6e": "Additional Configuration",
    "auto_dt\u0004\u9a8c\u8bc1\u7c7b\u578b": "Auth Type",
    "auto_dt\u0004\u9ed8\u8ba4 wallabag \u8d26\u53f7\u5bc6\u7801 (\u9ed8\u8ba4: \u81ea\u52a8\u751f\u6210)": "The password you use to login wallabag after successful installation [default: automatic generate]",
    "auto_dt\u0004\u9ed8\u8ba4\u4e0d\u4f7f\u7528 CDN\uff0c\u6b63\u5e38\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u5373\u53ef": "You can use default value. [default: none]",
    "auto_dt\u0004\u9ed8\u8ba4\u4e0d\u5141\u8bb8\u7528\u6237\u6ce8\u518c": "Whether to allow public users to register [default: false]",
    "auto_dt\u0004\u9ed8\u8ba4\u4e3a false, \u662f\u5426\u542f\u7528\u53cc\u91cd\u8eab\u4efd\u8ba4\u8bc1": "Whether to enable 2FA [default: false]",
    "auto_dt\u0004\u9ed8\u8ba4\u4e3a: \"no-reply@wallabag.org\". \u8fd9\u4e2a\u90ae\u7bb1\u7528\u4e8e\u53d1\u9001\u53cc\u91cd\u8eab\u4efd\u8ba4\u8bc1\u90ae\u4ef6\u3002": "This mailbox is used to send 2FA emails. [default: no-reply@wallabag.org]",
    "auto_dt\u0004\u9ed8\u8ba4\u503c\u5373\u53ef": "You can use default value",
    "auto_dt\u0004\u9ed8\u8ba4\u503c\u5373\u53ef\u3002\u5f00\u53d1\u8005\u4f7f\u7528, \u53c2\u89c1 [\u6587\u6863](https://wordpress.org/support/article/debugging-in-wordpress/) ": "You can use default value. [documentation](https://wordpress.org/support/article/debugging-in-wordpress/) ",
    "auto_dt\u0004\u9ed8\u8ba4\u521b\u5efa\u7684 wallabag \u7528\u6237\u8d26\u53f7": "The wallabag user account created by default",
    "auto_dt\u0004\u9ed8\u8ba4\u5b89\u88c5\u5b9d\u5854\u9762\u677f\u4e2d\u6587\u7248\u672c\u3002\u53d6\u6d88\u9009\u62e9\u5219\u5b89\u88c5\u56fd\u9645\u7248\u3002": "Yes for install Chinese version otherwise install Internationale version",
    "auto_dt\u0004\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a\u60a8\u8bbf\u95ee wallabag \u7684 \u57df\u540d\u3002\u4f8b\u5982: https://wallabag.example.com": "The domain name you will be used to visit wallabag service.eg: https://wallabag.example.com",
    "auto_dt\u0004\u9ed8\u8ba4\u8bbf\u95eeURL: http://0.0.0.0:3000\uff0c\u5982\u679c\u60a8\u4f7f\u7528\u53cd\u5411\u4ee3\u7406\uff0c\u8bf7\u8bbe\u7f6e\u4e3a\u60a8\u7684\u53cd\u5411\u4ee3\u7406\u7684 URL, \u4f8b\u5982: https://chatwoot.2cc.net": "If you are using a reverse proxy, set it to your reverse proxy's urleg: https://chatwoot.2cc.net[default: http://0.0.0.0:3000]",
    "auto_dt\u0004\u9ed8\u8ba4\u968f\u673a\u751f\u6210\u3002(\u5b89\u5168\u76f8\u5173\uff0c\u4f7f\u7528\u9ed8\u8ba4\u8bbe\u7f6e\u5373\u53ef)": "Generated randomly by default. (Security related, use the default settings is ok)",
    "ui\u0004Terminal": "Terminal",
    "ui\u0004WebSocket \u8fde\u63a5\u5931\u8d25...": "WebSocket connect failed ...",
    "ui\u0004WebSocket \u8fde\u63a5\u5df2\u65ad\u5f00": "WebSocket disconnected",
    "ui\u0004WebSocket \u8fde\u63a5\u6210\u529f": "WebSocket connect success",
    "ui\u0004object \u9519\u8bef": "object Error",
    "ui\u0004object(allOf)\u7c7b\u578b\u9519\u8bef!(\u7cfb\u7edf\u5185\u90e8\u9519\u8bef\uff0c\u8bf7\u8054\u7cfb\u5f00\u53d1\u8005)": "object(allOf) Type Error! (Internal Error, Please Contact Support)",
    "ui\u0004{{ host }} \u5f00\u59cb\u8fd0\u884c {{task}}": "Start running {{task}} on {{ host }}",
    "ui\u0004{{ host }} \u8df3\u8fc7\u8fd0\u884c": "Skip run on {{ host }}",
    "ui\u0004{{ host }} \u8fd0\u884c {{task}} \u5931\u8d25": "{{ host }} run {{task}} failed",
    "ui\u0004{{ host }} \u8fd0\u884c {{task}} \u6210\u529f": "{{ host }} run {{task}} success",
    "ui\u0004\u4e0d\u5b58\u5728\u5f15\u7528\u7c7b\u578b!(\u7cfb\u7edf\u5185\u90e8\u9519\u8bef\uff0c\u8bf7\u8054\u7cfb\u5f00\u53d1\u8005)": "Invalid reference type!(Internal Error, Please Contact Support)",
    "ui\u0004\u4efb\u52a1\u5220\u9664\u4e4b\u540e\u5c06\u65e0\u6cd5\u6062\u590d\uff0c\u5e76\u4e14\u60a8\u4e5f\u65e0\u6cd5\u7f51\u9875\u67e5\u770b\u6b64\u4efb\u52a1\uff0c\u786e\u8ba4\u5220\u9664?": "After the task is deleted, it cannot be recovered and you will not be able to view the task on the web page.",
    "ui\u0004\u4efb\u52a1\u5f00\u59cb\u8fd0\u884c": "Start Running",
    "ui\u0004\u4efb\u52a1\u7ed3\u679c\u6c47\u603b": "Result Summary",
    "ui\u0004\u51c6\u5907\u6267\u884c {{task}}": "Prepare running {{task}}",
    "ui\u0004\u51c6\u5907\u6267\u884c\u4efb\u52a1": "Prepare Running",
    "ui\u0004\u51c6\u5907\u6536\u96c6\u670d\u52a1\u5668\u7684\u57fa\u7840\u4fe1\u606f": "Prepare to gather basic information about the server",
    "ui\u0004\u5220\u9664": "Delete",
    "ui\u0004\u5220\u9664\u4efb\u52a1": "Delete Task",
    "ui\u0004\u5220\u9664\u4efb\u52a1\u6210\u529f! ({{seconds}}\u79d2\u540e\u8df3\u8f6c\u5230\u9996\u9875": "Delete Task Success! Goto home page after ({{seconds}}) seconds",
    "ui\u0004\u53c2\u6570\u9884\u89c8": "Preview Parameters",
    "ui\u0004\u53cd\u9988\u3001\u8c03\u8bd5\u95ee\u9898\u65f6\u7531\u5f00\u53d1\u4eba\u5458\u4f7f\u7528\u3002": "Feedback, debugging used by developers",
    "ui\u0004\u53d6\u6d88\u4efb\u52a1": "Cancel Task",
    "ui\u0004\u53d6\u6d88\u4efb\u52a1?": "Cancel Task?",
    "ui\u0004\u53d6\u6d88\u4efb\u52a1\u5931\u8d25": "Cancel Task Failed",
    "ui\u0004\u53d6\u6d88\u4efb\u52a1\u6210\u529f": "Cancel Task Success",
    "ui\u0004\u547d\u4ee4\u56de\u653e": "Shell Replay",
    "ui\u0004\u552f\u4e00\u6807\u8bc6": "UUID",
    "ui\u0004\u5efa\u7acb\u8fde\u63a5\u4e2d...": "Connecting...",
    "ui\u0004\u5f00\u59cb\u6536\u96c6 {{host}} \u670d\u52a1\u5668\u7684\u57fa\u7840\u4fe1\u606f": "Start gather information about {{host}}",
    "ui\u0004\u5f00\u59cb\u65f6\u95f4": "Start Time",
    "ui\u0004\u5f3a\u5236\u7ed3\u675f\u4efb\u52a1": "Kill Task",
    "ui\u0004\u5f3a\u5236\u7ed3\u675f\u4efb\u52a1?": "Force Kill Task?",
    "ui\u0004\u60a8\u786e\u8ba4\u5220\u9664\u6b64\u4efb\u52a1?": "Confirm delete the task?",
    "ui\u0004\u60a8\u786e\u8ba4\u53d6\u6d88\u6b63\u5728\u8fd0\u884c\u7684\u4efb\u52a1?": "Confirm cancel of current running task?",
    "ui\u0004\u60a8\u786e\u8ba4\u5f3a\u5236\u7ed3\u675f\u6b63\u5728\u8fd0\u884c\u7684\u4efb\u52a1?": "Confirm forced termination of current running task?",
    "ui\u0004\u6536\u96c6\u670d\u52a1\u5668 {{host}} \u57fa\u7840\u4fe1\u606f\u5931\u8d25": "Gather basic information about {{host}} failed",
    "ui\u0004\u6536\u96c6\u670d\u52a1\u5668 {{host}} \u57fa\u7840\u4fe1\u606f\u6210\u529f": "Gather basic information about {{host}} success",
    "ui\u0004\u653e\u5f03": "Cancel",
    "ui\u0004\u653e\u5f03\u5220\u9664": "Cancel",
    "ui\u0004\u670d\u52a1\u5668\u8fde\u63a5\u5df2\u7ecf\u65ad\u5f00 [\u8bf7\u5237\u65b0\u9875\u9762]": "Disconnected to server [Please reload the page]",
    "ui\u0004\u6807\u51c6\u8f93\u51fa": "Stdout",
    "ui\u0004\u786e\u8ba4": "Confirm",
    "ui\u0004\u786e\u8ba4\u5220\u9664": "Confirm",
    "ui\u0004\u7c7b\u578b\u9519\u8bef": "Type Error",
    "ui\u0004\u8054\u5408\u7c7b\u578b\u6700\u5c11\u9700\u8981\u4e24\u4e2a\u5143\u7d20!(\u7cfb\u7edf\u5185\u90e8\u9519\u8bef\uff0c\u8bf7\u8054\u7cfb\u5f00\u53d1\u8005)": "Union type at least have 2 types.(Internal Error, Please Contact Support)",
    "ui\u0004\u8be6\u7ec6\u4fe1\u606f": "Detail Information",
    "ui\u0004\u8df3\u8fc7\u8fd0\u884c {{task}}": "Skip run {{task}}",
    "ui\u0004\u8fd0\u884c {{task}} \u5931\u8d25": "Running {{task}} failed",
    "ui\u0004\u8fd0\u884c {{task}} \u6210\u529f": "Running {{task}} success",
    "ui\u0004\u901a\u7528\u4fe1\u606f": "General Information",
    "\u5821\u5792\u673a\u5730\u5740": "Jump Server",
    "\u5821\u5792\u673a\u670d\u52a1\u5668\u7684\u57df\u540d \u6216\u8005 IP\u5730\u5740, \u4f8b\u5982: 1.1.1.1": "Jump server domain or ip address, for example: 1.1.1.1",
    "\u7f16\u8f91\u5668\u0004SSH \u6216 win remote management \u670d\u52a1\u7684\u7aef\u53e3\u53f7": "SSH/win remote management service port",
    "\u7f16\u8f91\u5668\u0004\u53c2\u6570\u914d\u7f6e": "Parameter Configuration",
    "\u7f16\u8f91\u5668\u0004\u63d0\u4ea4\u4efb\u52a1": "Submit Task",
    "\u7f16\u8f91\u5668\u0004\u65b0\u589e": "Add",
    "\u7f16\u8f91\u5668\u0004\u6ca1\u6709\u53c2\u6570\u9700\u8981\u914d\u7f6e": "No parameters to configure",
    "\u7f16\u8f91\u5668\u0004\u7aef\u53e3\u53f7": "Port"
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
    "DATETIME_FORMAT": "N j, Y, P",
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%m/%d/%Y %H:%M:%S",
      "%m/%d/%Y %H:%M:%S.%f",
      "%m/%d/%Y %H:%M",
      "%m/%d/%y %H:%M:%S",
      "%m/%d/%y %H:%M:%S.%f",
      "%m/%d/%y %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "N j, Y",
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d",
      "%m/%d/%Y",
      "%m/%d/%y"
    ],
    "DECIMAL_SEPARATOR": ".",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "F j",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "m/d/Y P",
    "SHORT_DATE_FORMAT": "m/d/Y",
    "THOUSAND_SEPARATOR": ",",
    "TIME_FORMAT": "P",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
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

