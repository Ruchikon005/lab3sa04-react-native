# lab3sa04-react-native
 ## Weather Application API
 
 6135512005 นาย รุจิกร เหมือนเพชร
 
## tool(เครื่องมือที่จำเป็น):
-	Chocolatey (for Windows), Brew (for OSX)
-	Node.js
-	Yarn
-	Git
-	expo CLI
-	Visual Studio Code
-	Android Studio

run : yarn start

libary ที่จำเป็นต้องลงสามารถและขั้นตอนในการขึ้นโปรเจ็คการทำงานของโค้ดดูได้จาก Medium :https://medium.com/@6135512005/weather-application-with-react-native-weather-api-6a715eb1627e?source=friends_link&sk=b152192d89174fc4ea7847acc7aa5e1e

### สิ่งที่ได้ทำใน lab2SA04
- การขึ้นตัวโปรเจ็ค react native >>expo init <projectname>
- ใช้ Passing props ในการผ่านค่า zip code
- สร้าง components และใช้ image backgroup 
- การทำ Flex Box ในการจัด layuot แบ่งพื่นที่ในการทำงาน
- ใช้ useState , useEffect
- ใช้ Api ดึงข้อมูลสภาพอากาศ จากตัว Api OpenWeathermap ในตัวไฟล์ Weather.js
- Router การเพิ่มหน้า สลับหนาของแอพ ชึ่งจะเป็นการเพิ่ม components ZipCodeScreen แสดงชื่อ และ รหัสไปรษณี 
- Navigation & Route Parameter การทำงานร่วมกันของแต่ละหน้าจอ UI สามารถส่งผ่านค่าการทำงานได้โดยการใช้ Route Parameter 
- 
 
### สิ่งที่ได้ทำเพิ่มเติมสำหรับLabนี้
- HomeScreen.js เป็นหน้าที่แสดง Welcome Phuket และทำการส่งค่าเป็น cityname(ชื่อจังหวัด) ไปให้ตัว Weather.js ทำงาน
- App.js เพิ่ม bottomtabNavigation (แถบเมนูด้านล่าง) เพื่อเรียกใช้งานหน้าต่างๆ มีหน้า home  และ หน้า location
- เพิ่มการเรียกใช้ Ionicons เพื่อใช้ตรง bottomtab 
- เพิ่มการเรียกใช้ตัว icon ของสภาพอากาศ จากตัว Api Openweathermap 
- ตกแต่ง UI เพิ่มเติม

Vedio Application
youtube:https://www.youtube.com/watch?v=iSti3X3988o&t=2s
Medium:https://medium.com/@6135512005/weather-application-with-react-native-weather-api-6a715eb1627e?source=friends_link&sk=b152192d89174fc4ea7847acc7aa5e1e
