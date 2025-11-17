1.
keyof object টাইপের সব key-কে বের করে আনে।
ভুল key access করতে দেয় না।

type Person = {
    name: string;
    age: number;
    email: string;
};
type PersonKeys = keyof Person;


2.
any মানে “যে কোনো টাইপ চলবে।”
unknown মানে টাইপ অজানা
never মানে:
এই ভ্যারিয়েবল কখনো কোনো ভ্যালু ধারণ করবে না
এই ফাংশন কখনো normal return করবে না
