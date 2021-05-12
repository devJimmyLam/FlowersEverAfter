# Create API documentation

## Description
To avoid writing the documentation about your REST API, we can use DocGen command-line tool that can generate HTML and Markdown documentation easily.To create documentation while writing APIs collection in Postman you need to provide the required information.

## FlowersEverAfter API Documentations
- [HTML Version](/API Documentation/API Documentation.md)
- [Markdown Version](API Documentation/API Documentation.md)
<hr/>
<p align="center">
  <img src="/API Documentation/api.png">
</p>
<hr/>

## Instructions
### Installaltion of DocGen
1. For Macs & Linux see command below to install.
```
curl https://raw.githubusercontent.com/thedevsaddam/docgen/v3/install.sh -o install.sh && sudo chmod +x install.sh && sudo ./install.sh
```
2. For windows download the binary from link below.
- [https://github.com/thedevsaddam/docgen](https://github.com/thedevsaddam/docgen)

### Create API Documentation. 
3. Export Postman Collection and save to a location you can access in steps below.
- NOTE: Whenever you update your Postman Collection, then you will need to repeat step 3 again to generate an updated API Documentation.

4. Generate DocGen API Documentation. 
- NOTE: Replace "input-postman-collection.json" with your Postman Collection file you created in step 3.

<hr/>
```
//HTML API Documentation.
docgen build -i input-postman-collection.json -o ~/Downloads/index.html
```
<hr/>
```
//Markdown API Documentation.
docgen build -i input-postman-collection.json -o ~/Downloads/index.md -m
```
<hr/>

5. Save/move API Documentation to your project folder. 

## Resources:
- [Postman](https://www.postman.com/api-documentation-tool/)
- [Create API documentation from Postman collection](https://thedevsaddam.medium.com/create-api-documentation-from-postman-collection-d40540582155)

## Authors & Contributor:
All credit goes to [thedevsaddam](https://github.com/thedevsaddam/docgen) for creating DocGen.