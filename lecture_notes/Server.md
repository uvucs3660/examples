# Servers

## URL's

## Basic HTTP Request:

[Basic HTTP Request](https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7880fc22-160a-4d20-9e74-00f9ded06681_1600x938.png)

## URL Components

https://host:port/path?param=value&name=val#fragment

## Demo - [Parts of a URL](https://www.geeksforgeeks.org/components-of-a-url/)

Lets Talk about Hosts

DNS turns a domain name into an IP address, the systems don't use the names, but use the ip addresses for communication, after DNS

commands like ping let you put in a domain name, and get it's ip address.

## Demo - Ping

```
dig uvu.edu
```

```
ping localhost
```

Localhost is used to send a loopback request, which is data from your computer acting as a virtual server, and is sent back to itself without ever passing through a physical network.

This bypasses any local network interface hardware

## Ports

How many ports are the: 2^16 or 65536

0 is reserved and implies an unspecified source or destination

[IP Ports and their assignment](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)

\< 1024 are "priveleged ports" and require specific permission to access

We will generally use ports over 1024 for our projects.  The rest of the ports can be used as long as someone isn't using it first, but you can always lookup and see who might be using them

## Demo -

show telnet accessing content on local web server

show postman making data save and load requests.

Architecture Diagram

[n-tier archetecture](https://mermaid.live/view#pako:eNqF0V1rwjAUBuC_EnKt0K0KpReDfgi7sBebhcGaXZw2ZzXYJiFJN4b435daRB3ozk2Sh_Pmg-xpozjSmDLZGtBbsn5lkviyQz1B1gmUbsKxkio16tui-ZgMJWfyT-YN61KgOYfS6rks1mSD5utuMNH6OphVnjrRgBNK_p8v0FpohWzPO-RV8VKWxF96dzeag4Prs1fVaDVYvHlwQuZzEgVB4Mcnkl5geMLsAh-iKDxiPmF2E5eL8PGIKybpjPZoehDc_9N-bGLUbbFHRmM_5WB2zP_fwffB4NTmRzY0dmbAGR00B4e5AP_G_oQa5LtSfvkJncXDL4ozl28)

## Homework -

Intro To how to talk to servers. So many choices

[https://www.youtube.com/watch?v=zY2DMpCUfCg](https://www.youtube.com/watch?v=zY2DMpCUfCg)

## AI Used for Presentation:

[https://g.co/gemini/share/3399a1dbc19b](https://g.co/gemini/share/3399a1dbc19b) - diagram generation (uploaded a drawing) Did a good job generating a layered diagram.

ChatGPT - prompt - image and this prompt "convert this image into a diagram" - got an error generating link.

microsoft copilot doesn't have a reasonable export.
