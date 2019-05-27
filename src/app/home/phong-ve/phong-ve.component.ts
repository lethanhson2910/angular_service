import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { QuanLyPhimService} from './../../../_core/services/quan-ly-phim.service';

@Component({
  selector: 'app-phong-ve',
  templateUrl: './phong-ve.component.html',
  styleUrls: ['./phong-ve.component.scss']
})
export class PhongVeComponent implements OnInit {
  public maLichChieu: any;
  public danhSachGhe: any;

  constructor(private activatedRoute: ActivatedRoute, private quanLyPhimService: QuanLyPhimService) { }

  ngOnInit() {
    this.getChiTietPhongVe();
  }

  getParams(){
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get("maLichChieu")
  }

  getChiTietPhongVe(){
    this.quanLyPhimService.chiTietPhongve(this.maLichChieu).subscribe((data:any) => {
      this.danhSachGhe = data.DanhSachGhe;
    })
  }
}
