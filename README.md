# NodeJs-Server-and-User-Interface


Web Server that instantly lists the sensor data transferred with LoRa



For npm modules 
```bash
npm init 
```
```bash
nodemon app.js 
```
```bash
http://localhost:3000/node1/save?temperature=value&pressure=value&humidity=value
http://localhost:3000/node2/save?temperature=value&pressure=value&humidity=value
http://localhost:3000/node3/save?temperature=value&pressure=value&humidity=value
```

When the above addresses are get operation, the values added to the value are displayed by the user interface.

```bash
http://localhost:3000/button/get
```
Get to the address above to send an order to the relevant End Node.


The data recorded in MongoDB is exported to graphs in the user interface.
