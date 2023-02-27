// let totalnilai = prompt("masukan nilai?" , 0)

// if (totalnilai > 90){
//     document.write("<h2>anda sudah lolos ujian</h2>");
// }
// document.write("<p>terimakasih sudah mengkuti ujian</p>");

// let niali = prompt("masukan nilai", 0);
// if(niali >= 90){
//     document.write("<h2>selamat anda lolos</h2>");
// }else{
//     document.write("<h2>jangan menyerah</h2>");
// }
// document.write("<p>terimakasih sudah berjuang</p>");

//percabangan suit case

// switch(variable){
// case "1":
//         //code
//  break;

//         case "value":
//             //code
//             break;
//             default:
//                 //code
// }

// if(kondisi){
//     //code
// }else{

// }
//contoh
// let hadiah = prompt("silahkan pilih hadiah mu dari 1 - 5");
// let hasilHadiah = "";
// switch(hadiah){
//     case "1":
//         hasilHadiah = "ipon 14 promag";
//         break;
//     case "2":
//         hasilHadiah = "lexireng";
//         break;
//     case "3":
//         hasilHadiah = "zxr123456788";
//         break;
//     case "4":
//         hasilHadiah = "lelerpl";
//         break;
//     case "5":
//         hasilHadiah = "cupang";
//         break;
//     default:
//         hasilHadiah = "tidak ada"
//         document.write('<h3>opps!pilihan anda ${hasilHadiah}<h3>');

                            
// if (hasilHadiah === ""){
//     document.write('<P>kamu gagal mendapatkan hadiah');
// } else {
//     document.write('selamat kamu mendapatkan ${hasilHadiah}');
// }
//     }
// let jwb = prompt("apakah jakarta adalah ibu saya?", "");
// let jawaban = (jwb.toUppercase() =="IYA") ? "benar":"salah";
// document.write('jawaban anda: <strong>$(jawaban)</strong>')

let user = prompt("username : ", "");
let pass = prompt("password : ", "");

if(user == "loay")
    if(pass == "loay1504"){
        document.write(`<h1>Selamat datang ${user}`);
    }else{
        document.write("<p>Password salah, silahkan coba lagi</p>");
    }else{
        document.write("<p>anda tidak terdaftar</p>");
    }