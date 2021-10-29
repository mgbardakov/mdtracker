import {AfterViewChecked, Component, Input, OnChanges, OnInit} from '@angular/core';
import {Device} from "../../../../model/device";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


@Component({
  selector: 'app-device-qr-table',
  templateUrl: './device-qr-table.component.html',
  styleUrls: ['./device-qr-table.component.css']
})
export class DeviceQrTableComponent implements OnInit {

  @Input()
  devices: Device[];

  constructor() { }

  ngOnInit(): void {

  }



  generatePDF() {
    let doc = new jsPDF();
    autoTable(doc, {
      html: '#qr-table',
      bodyStyles: {minCellHeight: 17},
      didDrawCell: function(data) {
        if (data.column.index === 3 && data.cell.section === 'body') {
          let td: any = data.cell.raw;
          console.log(td)
          let qr: any = td.getElementsByTagName('qr-code')[0];
          console.log(qr)
          let img: any = qr.getElementsByTagName('img')[0];
          console.log(img)
          let dim: any = data.cell.height - data.cell.padding('vertical');
          console.log(dim)
          let textPos = data.cell.getTextPos()
          doc.addImage(img.src, textPos.x,  textPos.y, dim, dim);
        }
      }
    });
    doc.save('device-table.pdf')
  }




  transliterate(word){
    let a = {"Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"'","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"a","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"'","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"'","б":"b","ю":"yu"};
    return word.split('').map(function (char) {
      return a[char] || char;
    }).join("");
  }
}
