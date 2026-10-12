# JavaScript Testing Notes

ตัวอย่างจากบท **Write Good Tests with Mocha** บน Codecademy

## `assert.ok()`

`assert.ok(condition)` จะผ่านเมื่อ `condition` เป็น truthy และจะ throw `AssertionError` เมื่อเป็น false

```js
assert.ok(result === expected);
```

ตัวอย่างใน `assert-ok-example.test.js` ตรวจว่า `100 - 4` ให้ผลลัพธ์เป็น `96`

## โครงสร้าง test

- `describe()` จัดกลุ่มชุดทดสอบ
- `it()` อธิบายพฤติกรรมหนึ่งข้อที่ต้องการทดสอบ
- `assert.ok()` ตรวจว่าเงื่อนไขเป็นจริง

## ก่อนนำไปใช้จริง

ติดตั้ง Mocha ก่อน แล้วจึงรันเทสต์:

```bash
npm install --save-dev mocha
npx mocha javascript-testing-notes/*.test.js
```
