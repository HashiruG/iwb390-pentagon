# EASYTASK


## Set up

1. Clone the project 

```
$ git clone https://github.com/HashiruG/iwb390-pentagon.git
```

2. Add a new file named `Config.toml` in the `/backend` directory and add the following configurations for the MongoDB database.

```
username = <Username for mongodb atlas>
password = <Password for mongodb atlas>

```

3. Add the following configurations for twilo API.

```
accountSid = <username for twilio API>
authToken =  <Auth token for twilio API>
```


4. Open a new Terminal in the project path and run the Ballerina service

```
$ cd iwb390-pentagon/backend
$ bal run
```

5. Then open a new terminal in the project path and run the React service

```
$ cd iwb390-Pentagon/frontend
$ npm run dev
```
