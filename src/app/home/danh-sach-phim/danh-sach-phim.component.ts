import { Component, OnInit } from '@angular/core';
import { PhimService } from './../../../_core/services/phim.service';
import { QuanLyPhimService } from './../../../_core/services/quan-ly-phim.service';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  danhSachPhim = [];
  constructor(private phimService: PhimService, private quanLyPhimService: QuanLyPhimService) { }

  ngOnInit() {
    this.getDanhSachPhim();
  }

  getDanhSachPhim(){
    //Lấy dữ liệu từ phimService
    // this.danhSachPhim = this.phimService.layDanhSachPhim();

    //Lấy dữ liệu từ Backend
    this.quanLyPhimService.layDanhSachPhim().subscribe((data: any) => {
      this.danhSachPhim = data;
    });
  }
}
