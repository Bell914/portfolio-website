# TDD และ Mocha — ลิงก์ประกอบ

## ใช้เขียนโปรแกรมแบบ Test-Driven Development (TDD)

- [Red–Green–Refactor diagram](https://content.codecademy.com/programs/tdd-js/articles/red-green-refactor-tdd.png) — ใช้จำวงจร: เขียน test ให้ fail → เขียนโค้ดให้ผ่าน → ปรับโค้ดให้สะอาดโดย test ยังผ่าน
- [Characteristics of a good test](https://www.codecademy.com/articles/tdd-u1-good-test) — ใช้ตรวจคุณภาพ test ว่าเร็ว ครอบคลุม แยกอิสระ ดูแลง่าย และสื่อความหมาย

## ใช้รันและจัดการชุดทดสอบด้วย command line

- [Wildcards ใน command line](https://www.codecademy.com/article/command-line-commands#heading-wildcards) — ใช้เลือกไฟล์ test หลายไฟล์ เช่น `mocha test/**/*_test.js`
- [JavaScript errors](https://www.codecademy.com/resources/docs/javascript/errors) — ใช้อ่านและแก้ error ที่ terminal รายงาน

## ใช้ทำให้ test อ่านง่ายและดูแลได้ในระยะยาว

- [JavaScript variables](https://www.codecademy.com/resources/docs/javascript/variables) — ใช้ตั้งชื่อข้อมูล input, expected และ result ให้สื่อความหมายในช่วง setup, exercise และ verification
- [JavaScript comments](https://www.codecademy.com/resources/docs/javascript/comments) — ใช้แบ่งช่วงของ test ให้ผู้อ่านเห็นเจตนาของโค้ดอย่างรวดเร็ว

## ใช้คำนวณผลสะสมในข้อมูลชนิด array

- [MDN: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=a) — ใช้รวม/สะสมค่าใน array เช่น ผลรวมรายการตัวเลข โดยกำหนดค่าเริ่มต้นเป็น `0`

## ใช้ทดสอบ edge case และตรวจชนิดข้อมูล

- [JavaScript strings](https://www.codecademy.com/resources/docs/javascript/strings) — ใช้อ้างอิงชนิดข้อมูลข้อความเมื่อต้องตรวจ input ด้วย `typeof` และโยน error หากข้อมูลไม่ตรงเงื่อนไข

## ใช้วางแผนและวัดความครอบคลุมของการทดสอบ

- [Control-flow graph](https://en.wikipedia.org/wiki/Control-flow_graph) — ใช้เห็นเส้นทางการทำงานของเงื่อนไข เพื่อออกแบบ test ให้ครอบคลุมทุก branch
- [Code coverage criteria](https://en.wikipedia.org/wiki/Code_coverage#Parameter_value_coverage) — ใช้ดูเกณฑ์วัด coverage เพิ่มเติม เช่น ความหลากหลายของค่าพารามิเตอร์
- [Product requirements document](https://en.wikipedia.org/wiki/Product_requirements_document) — ใช้อ้างอิงความต้องการของผลิตภัณฑ์เมื่อวัด test coverage ตาม feature/specification

## ใช้แยก dependency ออกจาก test

- [Mocks vs stubs in JavaScript](https://dev.to/snird/the-difference-between-mocks-and-stubs-explained-with-js-kkc) — ใช้เข้าใจความต่างของ mock/stub เมื่อแทนที่ API, ฐานข้อมูล หรือบริการภายนอกใน test

## ใช้สังเกตการเรียกใช้ฟังก์ชันระหว่าง test

- [Sinon spies documentation](https://sinonjs.org/releases/latest/spies/) — ใช้ตรวจว่าเมธอดถูกเรียกหรือไม่ (`called`), รับ argument อะไร (`calledWith`) และคืนค่าใด (`returned`) พร้อม `restore()` เมื่อ test จบ

## ใช้ฝึกแนวคิด Test-Driven Development

- [Introduction to Test-Driven Development](https://hackernoon.com/introduction-to-test-driven-development-tdd-61a13bc92d92) — ใช้ทบทวนวงจร Red → Green → Refactor และเหตุผลที่ test ช่วยลด regression ก่อน deploy

## ใช้เขียน assertion สำหรับ JavaScript tests

- [Chai documentation](https://www.chaijs.com/) — ใช้ค้นหารูปแบบ assertion ของ Chai เมื่อทำ test ด้วย Mocha เช่น `expect`, `should` และ `assert`

## ใช้เป็นเอกสารของ test framework

- [Mocha: Getting Started](https://mochajs.org/getting-started/) — ใช้ดูวิธีติดตั้งและรัน Mocha

## ใช้ตั้งเวลาและทำงานแบบ asynchronous ใน JavaScript

- [MDN: setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) — ใช้สั่ง callback ให้ทำงานหนึ่งครั้งหลังเวลาขั้นต่ำที่กำหนด โดยไม่ block UI
- [MDN: setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) — ใช้เรียก callback ซ้ำตามช่วงเวลา เช่น timer หรือ animation และควรหยุดด้วย `clearInterval()` เมื่อไม่ต้องใช้

## ใช้จัดการผลลัพธ์แบบ asynchronous ด้วย Promise

- [JavaScript Promise: `.then()`](https://www.codecademy.com/resources/docs/javascript/promise/then) — ใช้กำหนด success handler เมื่อ Promise resolve และส่งต่อค่าใน promise chain
- [JavaScript Promise: `.catch()`](https://www.codecademy.com/resources/docs/javascript/promise/catch) — ใช้ดักและจัดการข้อผิดพลาดเมื่อ Promise reject
- [JavaScript `setTimeout()`](https://www.codecademy.com/resources/docs/javascript/window/setTimeout) — ใช้อ้างอิงการตั้งเวลา callback ใน JavaScript และความสัมพันธ์กับ event loop

## ใช้เขียน asynchronous code แบบอ่านง่ายด้วย async/await

- [JavaScript Promise](https://www.codecademy.com/resources/docs/javascript/promise) — ใช้ทบทวนสถานะและค่าที่ Promise ส่งกลับก่อนนำมา `await`
- [JavaScript statements](https://www.codecademy.com/resources/docs/javascript/statements) — ใช้อ้างอิงรูปแบบ statement เมื่อต้องเรียงหลาย `await` ให้โค้ดอ่านเหมือน synchronous code
- [JavaScript functions](https://www.codecademy.com/resources/docs/javascript/functions) — ใช้อ้างอิงการประกาศ `async function` และวาง `try...catch` เพื่อจัดการ error

## ใช้สื่อสารระหว่างเว็บเบราว์เซอร์กับเซิร์ฟเวอร์

- [What is REST?](https://www.codecademy.com/articles/what-is-rest) — ใช้เรียนรู้ความหมายและบทบาทของ HTTP methods เช่น `GET`, `POST`, `PUT`, และ `DELETE` ในการออกแบบ API
- [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) — ใช้ตีความผลลัพธ์จาก server เช่น `200 OK` และ `404 Not Found`
- [HTTP 404 errors](https://www.codecademy.com/articles/http-errors-404) — ใช้เข้าใจสาเหตุและการรับมือเมื่อ resource หรือ URL path ไม่พบ
- [HTTPS](https://en.wikipedia.org/wiki/HTTPS#Difference_from_HTTP) — ใช้เข้าใจการเข้ารหัสข้อมูลที่ส่งผ่านเว็บ โดยเฉพาะข้อมูลส่วนบุคคลและข้อมูลชำระเงิน

## ใช้เลือกและเรียกใช้ Web API

- [MDN: Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) — ใช้เข้าถึงพิกัดผู้ใช้ในเบราว์เซอร์ โดยต้องขออนุญาตผู้ใช้ก่อน
- [MDN: Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) — ใช้ค้นหา browser APIs และรูปแบบการเรียกใช้ที่ถูกต้อง
- [OpenWeather API documentation](https://openweathermap.org/api) — ตัวอย่างการอ่านข้อกำหนดของ third-party API รวมถึง API key และพารามิเตอร์
- [What is JSON?](https://www.codecademy.com/article/what-is-json) — ใช้เข้าใจรูปแบบข้อมูล response ที่นิยมใช้ใน API และวิธีนำข้อมูลไปแสดงผล

## ใช้ตรวจสอบและแลกเปลี่ยนข้อมูล JSON

- [JSON specification (ECMA-404)](https://ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf) — ใช้อ้างอิงกฎมาตรฐานของ JSON เมื่อต้องส่งหรือรับข้อมูลระหว่างระบบ
- [MDN: Trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) — ใช้จำว่าห้ามใส่ comma หลังสมาชิกสุดท้ายใน JSON แม้ JavaScript บางกรณีจะยอมรับ
- [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) — ใช้เก็บวันที่/เวลาใน JSON เป็น string ด้วยรูปแบบมาตรฐานข้ามระบบ

## ใช้แปลง JSON กับ JavaScript object

- [MDN: `JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) — ใช้แปลง JSON string จาก API หรือไฟล์ `.json` ให้เป็น JavaScript object เพื่ออ่าน property ได้
- [MDN: `JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) — ใช้แปลง JavaScript object เป็น JSON string ก่อนส่งใน request body หรือบันทึกเป็นไฟล์

## ใช้เรียก API จาก JavaScript ด้วย Fetch

- [JavaScript requests](https://www.codecademy.com/resources/docs/javascript/requests) — ใช้อ้างอิงโครงสร้าง GET/POST request และการส่งข้อมูลไปยัง API
- [JavaScript methods](https://www.codecademy.com/resources/docs/javascript/methods) — ใช้ทบทวนการ chain `.then()` เพื่อจัดการ Promise ที่ `fetch()` ส่งกลับ

## ใช้ออกแบบและทดสอบความปลอดภัยของเว็บ

- [NIST: Penetration testing](https://csrc.nist.gov/glossary/term/penetration_testing) — ใช้เข้าใจการจำลองการโจมตีอย่างมีจริยธรรมเพื่อค้นหาและแก้ช่องโหว่
- [OWASP](https://owasp.org/) — ใช้เป็นแหล่งคู่มือ เครื่องมือ และแนวปฏิบัติด้านความปลอดภัยสำหรับนักพัฒนาเว็บ
- [OWASP Top 10](https://owasp.org/www-project-top-ten/) — ใช้ทบทวนรายการความเสี่ยงเว็บที่สำคัญและวาง security checklist ก่อน deploy

## ใช้ทบทวน Async JavaScript และ HTTP requests

- [MDN: AJAX guide](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX) — ใช้ทำความเข้าใจการสื่อสารกับเซิร์ฟเวอร์โดยไม่ต้อง reload ทั้งหน้า
- [MDN: Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach) — ใช้เลือกแนวทาง callback, Promise หรือ `async`/`await` ให้เหมาะกับงาน
- [MDN: Fetching data](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) — ใช้เป็นตัวอย่างการดึงข้อมูลจาก API และจัดการ response/error
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) — ใช้อ้างอิง syntax ของ `fetch()`, options และ request methods

## ใช้สร้างและเลือกสถาปัตยกรรม Web App

- [React](https://reactjs.org/) — ใช้สร้าง UI จาก component และ state สำหรับ Single-Page Application (SPA)
- [Vue.js](https://vuejs.org/) — ใช้สร้าง SPA ด้วย template และ reactive application logic

## ใช้เตรียม JavaScript สำหรับ React

- [MDN: A re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) — ใช้ทบทวน syntax พื้นฐานก่อนสร้าง React component
- [MDN: Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) — ใช้ดึงค่าออกจาก array, object และ function parameters แบบกระชับ โดยเฉพาะตอนรับ props ใน React

## ใช้เข้าใจ React และ Virtual DOM

- [React JSX reference](https://www.codecademy.com/resources/docs/react/jsx) — ใช้ทบทวน syntax JSX, การ nest element และการ render ผ่าน React root
- [Virtual DOM video](https://www.youtube.com/watch?v=jwRAdGLUarw) — ใช้ดูภาพรวมของ virtual DOM และขั้นตอน diffing ก่อนอัปเดต real DOM

## ใช้ออกแบบ REST API

- [What is CRUD?](https://www.codecademy.com/articles/what-is-crud) — ใช้จำการจับคู่การจัดการ resource: Create, Read, Update, Delete กับ HTTP methods
- [MDN: MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) — ใช้ตั้งค่า `Accept` และ `Content-Type` ให้ client กับ server เข้าใจชนิดข้อมูลตรงกัน
- [HTTP response status codes](https://restapitutorial.com/httpstatuscodes.html) — ใช้เลือก status code ที่เหมาะสม เช่น `200`, `201`, `204`, `400`, `403`, `404`, `500`
