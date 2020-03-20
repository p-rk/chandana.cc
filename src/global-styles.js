import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  @import url("https://fonts.googleapis.com/css?family=Kaushan+Script:400,700");


  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    box-sizing: border-box;
  }

  body {
    background: #f9fafc;
    font-family: "Kaushan Script", Sans-serif;
    line-height: 1.5;
    padding: 50px 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
  }

  .gatsby-highlight {
    border-bottom: 1px solid #e0e6ed;
    border-top: 1px solid #e0e6ed;
    margin: 15px -100px;
    padding: 0;

    pre[class*="language-"] {
      margin: 0;
      padding: 25px 100px;
    }
  }
  @charset "utf-8";
/* CSS Document */

.fn_cs_portfolio_details{
	width: 100%;
	float: left;
	clear: both;
}
.fn_cs_portfolio_details .portfolio_details{
	width: 100%;
	display: flex;
	flex-direction: row;
}
.fn_cs_portfolio_details .left_part{
	width: 40%;
	min-width: 40%;
}
.fn_cs_portfolio_details .right_part{
	padding-left: 40px;
}
.fn_cs_portfolio_details .right_part p{
	margin: 0;
	padding: 0;
}
.fn_cs_portfolio_details .title_holder h3{
	font-weight: 600;
    line-height: 1.4;
    font-family: "Raleway";
    color: #000;
	font-size: 23px;
	margin: 0;
}
.fn_cs_portfolio_details .title_holder{
	width: 100%;
	float: left;
	clear: both;
	margin-bottom: 30px;
}
.fn_cs_portfolio_details .list_holder{
	width: 100%;
	float: left;
	clear: both;
}
.fn_cs_portfolio_details .list_holder ul{
	margin: 0;
	padding: 0;
	list-style-type: none;
}
.fn_cs_portfolio_details .list_holder ul li{
	width: 100%;
	float: left;
	clear: both;
	margin: 0 0 10px 0;
}
.fn_cs_portfolio_details .list_holder .item{
	width: 100%;
	float: left;
	clear: both;
	position: relative;
	padding-left: 30px;
}
.fn_cs_portfolio_details .list_holder .item .arlo_w_fn_svg{
	position: absolute;
	top: 6px;
	left: 0;
	color: #ff4b36;
}
.fn_cs_portfolio_details .list_holder .item span{
	display: inline-block;
	line-height: 2;
}
.fn_cs_portfolio_details .list_holder .item .left_i{
	min-width: 110px;
    font-weight: 500;
    color: #000;
}
@media(max-width: 768px){
	.fn_cs_portfolio_details .portfolio_details{
		flex-wrap: column;
		flex-wrap: wrap;
	}
	.fn_cs_portfolio_details .right_part{
		padding-left: 0;
		padding-top: 40px;
	}
}











.fn_cs_portfolio_images{
	width: 100%;
	float: left;
	clear: both;
}
.fn_cs_portfolio_images ul{
	list-style-type: none;
	margin: 0;
	padding: 0;
}
.fn_cs_portfolio_images ul li{
	margin: 0;
	padding: 0;
	clear: both;
	width: 100%;
	float: left;
}
.fn_cs_portfolio_images ul li img{
	opacity: .1;
	min-width: 100%;
	position: relative;
}
.fn_cs_portfolio_images ul li .img_holder{
	clear: both;
	width: 100%;
	position: relative;
	float: left;
}
.fn_cs_portfolio_images ul li .abs_img{
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	z-index: 5;
}





.fn_cs_hero_header_exclusive{
	width: 100%;
    float: left;
    clear: both;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: auto;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive .content_holder{
	width: 100%;
	float: left;
	clear: both;
	max-width: 100% !important;
	position: relative;
	z-index: 5;
	display: flex;
	flex-direction: row;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive.fn_cs_o_water .content_holder{
	position: static;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive.fn_cs_o_water canvas{
	width: 100% !important;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive.fn_cs_o_water .title_holder{
	z-index: 5555;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive .title_holder{
	margin: 0 auto;
	clear: both;
	text-align: center;
	position: relative;
	padding-top: 243px;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive .t_image{
	position: absolute;
	top: 0;
	left: 50%;
	margin-left: -100px;
	width: 200px;
	height: 200px;
	display: block;
	border-radius: 100%;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive .t_image:after{
	position: absolute;
    content: "";
    top: -8px;
    bottom: -8px;
    left: -8px;
    right: -8px;
    border-radius: 100%;
    background-color: rgba(255,255,255,.08);
    z-index: -1;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive .title_holder h3{
	margin: 0;
	padding: 0;
	color: #fff;
    text-transform: uppercase;
    font-size: 45px;
    font-weight: 700;
	margin-bottom: 9px;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive .title_holder h3 span{
	color: #ff4b36;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive .title_holder p{
	margin: 0;
	padding: 0;
	color: #fff;
    font-size: 19px;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive .bg_holder{
	position: absolute;
	top: 0px;
	right: 0px;
	left: 0px;
	bottom: 0px;
	z-index: 0;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive .o_img{
	position: absolute;
	top: 0px;
	right: 0px;
	left: 0px;
	bottom: 0px;
	z-index: 2;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive .o_color{
	position: absolute;
	top: 0px;
	right: 0px;
	left: 0px;
	bottom: 0px;
	z-index: 4;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive .fn_cs_kenburnsy_wrap{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive .kenburnsy{
	height: auto;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
@media(max-width: 1040px){
	.cons_w_wrapper .fn_cs_hero_header_exclusive[data-height="vh"]{height: auto !important;}
	.cons_w_wrapper .fn_cs_hero_header_exclusive .content_holder{
  }
}






#particles-js{
	width: 100%;
    height: 100%;
    position: relative;
    z-index: 222;
}




















.fn_cs_about_text_slider{
	width: 100%;
	height: auto;
	clear: both;
	float: left;
}
.fn_cs_about_text_slider .about_text_slider{
	width: 100%;
	height: auto;
	clear: both;
	display: flex;
	flex-direction: row;
}
.fn_cs_about_text_slider .left_part{
	width: 35%;
	float: left;
	height: auto;
}
.fn_cs_about_text_slider .left_part .about_image_wrap{position: relative;}
.fn_cs_about_text_slider .left_part .about_image_wrap .image{
	position: absolute;
	z-index: 2;
}
.fn_cs_about_text_slider .left_part .about_image_wrap .image .inner{
	position: absolute;
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}
.fn_cs_about_text_slider .left_part .about_image_wrap .border .inner{
	position: absolute;
	top: 25px !important;
	bottom: -25px !important;
	left: 25px !important;
	right: -25px !important;
	border: 10px solid #000;
}
.fn_cs_about_text_slider .left_part .about_image_wrap img{opacity: 0;}
.fn_cs_about_text_slider .right_part{
	width: 65%;
	height: auto;
	padding-left: 70px;
}
.fn_cs_about_text_slider .right_part .desc_holder h3{
	margin: 0;
	padding: 0;
	margin-bottom: 30px;
	font-size: 25px;
	font-weight: 600;
}
.fn_cs_about_text_slider .right_part .desc_holder h3 span{
	color: #ff4b36;
}
.fn_cs_about_text_slider .right_part .desc_holder{
	margin-bottom: 23px;
}
.fn_cs_about_text_slider .right_part .desc_holder p{
	font-size: 16px;
	letter-spacing: 1px;
	line-height: 2;
}
.fn_cs_about_text_slider .right_part .desc_holder p span{
	color: #ff4b36;
	font-style: italic;
	font-weight: 400;
}
.fn_cs_about_text_slider .info_list{
	width: 100%;
	height: auto;
	clear: both;
	float: left;
	margin-bottom: 19px;
}
.fn_cs_about_text_slider .info_list ul{
	margin: 0px;
	padding: 0;
	list-style-type: none;
	margin-left: -20px;
}
.fn_cs_about_text_slider .info_list ul li{
	padding: 0;
	margin: 0px 0px 10px 0px;
	width: 50%;
	float: left;
	padding-left: 20px;
}
.fn_cs_about_text_slider .info_list ul li .info_item{
	width: 100%;
	float: left;
	clear: both;
	padding: 0px 0px 0px 30px;
	position: relative;
/*
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
*/
}
.fn_cs_about_text_slider .info_list ul li .info_item.no_icon{
	padding-left: 0;
}
.fn_cs_about_text_slider ul li label{
	font-weight: 500;
	color: #000;
	min-width: 85px;
	margin-right: 10px;
	display: inline-block;
}
.fn_cs_about_text_slider .info_list ul li a{
	text-decoration: none;
	color: #ff4b36;
    position: relative;
	border-bottom: 1px solid transparent;
	font-weight: 400;

    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
}
.fn_cs_about_text_slider .info_list ul li a:hover{border-bottom-color: #ff4b36;}
.fn_cs_about_text_slider .info_list ul li span.icon{
	position: absolute;
	left: 0px;
	top: 6px;
	display: block;
	width: 17px;
	height: 17px;
}
.fn_cs_about_text_slider .info_list ul li span.icon i{
	position: absolute;
	top: 0;
	left: 0;
	font-size: 17px;
}
.fn_cs_about_text_slider .info_list ul li span.icon .arlo_w_fn_svg{
	width: 17px;
	height: 17px;
	color: #ff4b36;
	position: absolute;
	top: 0;
	left: 0;
}




.fn_cs_about_text_slider .btn_list{
	width: 100%;
	height: auto;
	clear: both;
	float: left;
}
.fn_cs_about_text_slider .btn_list ul{
	margin: 0px;
	list-style-type: none;
}
.fn_cs_about_text_slider .btn_list ul li{
	padding: 0;
	margin: 0px 15px 20px 0px;
	float: left;
}
.fn_cs_about_text_slider .btn_list ul li a span{
	position: relative;
	z-index: 5;
	color: inherit !important;
}
.fn_cs_about_text_slider .btn_list ul li a{
	text-decoration: none;
	color: #fff;
	background-color: #ff4b36;
	display: block;
	padding: 8px 30px;
	font-family: "Raleway";
	line-height: 2;
	overflow: hidden;
	position: relative;
}
.fn_cs_about_text_slider .btn_list ul li a:before{
	position: absolute;
    content: "";
    top: 0px;
    height: 100%;
    left: -25%;
    width: 0%;
    background-color: #000;
    transform: skew(50deg);
    transition-duration: .6s;
    z-index: 1;
}
.fn_cs_about_text_slider .btn_list ul li a:hover:before{width: 150%;}


.fn_cs_about_text_slider.fn_classic .right_part{
	margin: 0;
	padding: 0;
	width: 100%;
}
.fn_cs_about_text_slider.fn_classic .info_list ul li{
	width: auto;
}
.fn_cs_about_text_slider.fn_classic .info_list ul li .info_item{
	padding-left: 0;
	line-height: 1.6;
	padding: 10px 20px;
	background-color: #ffedeb;
	border-radius: 3px;
	overflow: hidden;
}
.fn_cs_about_text_slider.fn_classic ul li label{
	min-width: inherit;
	margin-right: 40px;
	position: relative;
}
.fn_cs_about_text_slider.fn_classic ul li label:after{
	content: '';
	width: 20px;
	height: 1px;
	background-color: #ff4b36;
	position: absolute;
	top: 50%;
	left: 100%;
	margin-left: 10px;
	margin-top: -1px;
}
.fn_cs_about_text_slider.fn_classic .info_list ul li{
	margin-bottom: 20px;
}
.fn_cs_about_text_slider.fn_classic .right_part .desc_holder h3{
	font-size: 30px;
	margin-bottom: 33px;
}
.fn_cs_about_text_slider.fn_classic .right_part .desc_holder p{
	margin-bottom: 36px;
}
.fn_cs_about_text_slider.fn_classic .info_list{
	margin-bottom: 30px;
}
.fn_cs_about_text_slider.fn_classic .btn_list ul li a.link{
	background-color: transparent !important;
	padding: 0;
	padding-top: 9px;
	padding-bottom: 9px;
	color: #000 !important;
}
.fn_cs_about_text_slider.fn_classic .btn_list ul li a.link:before{
	display: none;
}
.fn_cs_about_text_slider.fn_classic .btn_list ul li a.link span:after{
	content: '';
	position: absolute;
	bottom: -4px;
	left: 0;
	right: 0;
	height: 1px;
	background-color: #bbb;
}
.fn_cs_about_text_slider.fn_classic .btn_list ul li a.link:hover span:after{
	background-color: #555;
}
.fn_cs_about_text_slider.fn_classic .btn_list ul li a{
	padding-top: 9px;
	padding-bottom: 9px;
	border-radius: 3px;
}
.fn_cs_about_text_slider.fn_classic .btn_list ul li{
	margin-right: 50px;
}
.fn_cs_about_text_slider.fn_classic .btn_list ul li:last-child{
	margin-right: 0;
}
.fn_cs_about_text_slider.fn_classic .right_part .desc_holder h3{
	font-weight: 500;
}



.fn_cs_services_numbered{
	width: 100%;
	float: left;
	clear: both;
}
.fn_cs_services_numbered .snumbered_inner{
	width: 100%;
	float: left;
	clear: both;
}
.fn_cs_services_numbered .snumbered_inner ul{
	margin: 0;
	list-style-type: none;
	padding: 0;
	margin-left: -50px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
}
.fn_cs_services_numbered .snumbered_inner ul li{
	margin: 0;
	padding: 0;
	width: 33.3333%;
	float: left;
	padding-left: 50px;
	margin-bottom: 50px;
}
.fn_cs_services_numbered .snumbered_inner ul li .item{
	width: 100%;
	float: left;
	clear: both;
	margin: 0;
	position: relative;
    background-color: #fff;
	color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 30px;
    padding: 90px 40px 29px 40px;
    transition: all .3s ease;
    overflow: hidden;
	height: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
}
.fn_cs_services_numbered .snumbered_inner ul li .item:hover{
	color: rgba(0,0,0,.2);
}
.fn_cs_services_numbered .snumbered_inner ul li .item > *{
	position: relative;
	z-index: 2;
}
.fn_cs_services_numbered .snumbered_inner ul li .number_holder{
	position: absolute;
    top: -15px;
    left: 20px;
    z-index: 1;
}
.fn_cs_services_numbered .snumbered_inner ul li .number_holder h3{
	margin: 0;
	padding: 0;
    color: #e1e1e1;
    font-family: "Roboto";
    font-size: 170px;
/*	font-size: 8.88vw;*/
	line-height: 1.4;
	font-weight: 600;
}
.fn_cs_services_numbered .snumbered_inner ul li .item > h3{
	margin: 0;
	padding: 0;
	line-height: 1.4;
	font-weight: 600;
	font-size: 25px;
	color: #000;
	margin-bottom: 20px;
}
.fn_cs_services_numbered .snumbered_inner ul li .item p.desc_h{
	margin: 0;
	padding: 0;
	color: #6f6f6f;
	font-size: 16px;
	line-height: 2;
	margin-bottom: 17px;
	margin-top: auto;
}
.fn_cs_services_numbered .snumbered_inner ul li .item p.btn_h{
	margin: 0;
	padding: 0;
}
.fn_cs_services_numbered .snumbered_inner ul li .item p.btn_h a{
	text-decoration: none;
    color: #ff4b36;
    border-bottom: 1px solid transparent;
    transition: all .3s ease;
	font-size: 16px;
}
.fn_cs_services_numbered .snumbered_inner ul li .item p.btn_h a:hover{
	border-bottom-color: #ff4b36;
}





.fn_cs_progress_bar,
.fn_cs_progress_wrap{
	width: 100%;
	float: left;
	clear: both;
}
.fn_cs_progress{
	width:100%;
	margin-bottom:15px;
}
.fn_cs_progress > span{
	margin:0px 0px 3px 0px;
	width:100%;
	display:block;
	text-align:left;
}
.fn_cs_progress span.label{
	font-size:13px;
	text-transform:uppercase;
	font-weight:500;
	color:#333;
	letter-spacing:1px;
}
.fn_cs_progress span.number{
	float:right;
	font-size:13px;
	color:#999;
}
.fn_cs_progress .fn_cs_bar_bg{
	background:#eee;
	width:100%;
	min-width:100%;
	position:relative;
	height:20px;
}
.fn_cs_progress .fn_cs_bar_bg .fn_cs_bar_wrap{
	width:0px;
	height:100%;
}
.fn_cs_progress .fn_cs_bar_bg .fn_cs_bar_wrap.open{
	-webkit-animation: td_expand 3s cubic-bezier(0.165, 0.840, 0.440, 1.000);  /* Safari 4+ */
	-moz-animation:    td_expand 3s cubic-bezier(0.165, 0.840, 0.440, 1.000);  /* Fx 5+ */
	animation:         td_expand 3s cubic-bezier(0.165, 0.840, 0.440, 1.000);  /* IE 10+ */
	width:100%;
}
.fn_cs_progress .fn_cs_bar_bg .fn_cs_bar{
	height:100%;
	background:#333;
	width:0px;
	overflow:hidden;
}
.fn_cs_progress_wrap[data-strip="on"] .fn_cs_progress .fn_cs_bar{
	background-image: linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);

	-webkit-animation: td_bar_move 4s linear infinite;
	-moz-animation: td_bar_move 4s linear infinite;
	animation: td_bar_move 4s linear infinite;
	background-size: 50px 50px;
}

@-webkit-keyframes td_bar_move {0%{background-position: 0 0;} 100% {background-position: 50px 50px;}}
@-moz-keyframes td_bar_move {0%{background-position: 0 0;} 100% {background-position: 50px 50px;}}
@keyframes td_bar_move {0%{background-position: 0 0;} 100% {background-position: 50px 50px;}}

/*expand width animation*/
@-webkit-keyframes td_expand {0%{ width:0%; } 100%{ width:100%; }}
@-moz-keyframes td_expand {0%{ width:0%; } 100%{ width:100%; }}
@keyframes td_expand {0%{ width:0%; } 100%{ width:100%; }}






.fn_cs_progress_bar_desc{
	width: 100%;
	float: left;
	clear: both;
}
.fn_cs_progress_bar_desc .pbd_inner{
	width: 100%;
	float: left;
	clear: both;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
}
.fn_cs_progress_bar_desc .pbd_inner .left_part{
	width: 50%;
	padding-right: 80px;
}

.fn_cs_progress_bar_desc .pbd_inner .right_part{
	width: 50%;
}
.fn_cs_progress_bar_desc .pbd_inner .left_part h3{
	margin: 0;
	padding: 0;
	font-size: 25px;
	font-weight: 600;
	line-height: 1.4;
	color: #000;
	margin-bottom: 29px;
}
.fn_cs_progress_bar_desc .pbd_inner .left_part h3 span{
	color: #ff4b36;
}
.fn_cs_progress_bar_desc .pbd_inner .left_part p{
	margin: 0;
	padding: 0;
}







.fn_cs_project_category{
	width: 100%;
	float: left;
	clear: both;
}
.fn_cs_project_category ul.posts_filter{
	margin: 0;
	padding: 0;
	list-style-type: none;
	margin-bottom: 29px;
}
.fn_cs_project_category ul.posts_filter:after{
	clear: both;
	display: table;
	content: '';
}
.fn_cs_project_category ul.posts_filter li{
	display: block;
	float: left;
    margin: 0px 25px 10px 0px;
}
.fn_cs_project_category ul.posts_filter li a{
	display: block;
	color: #000;
}
.fn_cs_project_category ul.posts_filter li a:hover,
.fn_cs_project_category ul.posts_filter li a.current{
	color: #ff4b36;
}
.fn_cs_project_category ul.posts_filter li a.current{
	font-weight: 500;
}
.fn_cs_project_category ul.posts_list{
	margin: 0;
	padding: 0;
	list-style-type: none;
	margin-left: -50px;
}
.fn_cs_project_category ul.posts_list:after{
	clear: both;
	display: table;
	content: '';
}
.fn_cs_project_category ul.posts_list li{
	width: 33.3333%;
    float: left;
    position: relative;
    margin: 0px 0px 50px 0px;
    padding-left: 50px;
}
.fn_cs_project_category ul.posts_list li .item{
	position: relative;
	width: 100%;
	float: left;
	clear: both;
}
.fn_cs_project_category ul.posts_list li .item img{
	position: relative;
	opacity: 0;
	min-width: 100%;
}
.fn_cs_project_category ul.posts_list li .item .abs_img{
	position: absolute;
	z-index: 3;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.fn_cs_project_category ul.posts_list li .img_holder a{
	display: block;
	position: absolute;
	z-index: 5;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.fn_cs_project_moving_title{
	white-space: nowrap;
    background: #ffffff;
    font-size: 23px;
    font-weight: 600;
    padding: 4px 13px;
    color: #000000;
    position: fixed;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    font-family: "Raleway";
	box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
}
.fn_cs_project_moving_title.visible {
  opacity: 1;
  visibility: visible;
}
.fn_cs_project_moving_title h3{
	margin: 0;
	padding: 0;
    font-size: 23px;
    font-weight: 600;
}
.fn_cs_project_moving_title span{
	position: absolute;
	background: #ffffff;
	top: 100%;
	left: 0;
	font-size: 14px;
	line-height: 1;
	font-weight: 400;
	padding: 5px 15px;
	display: block;
	box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
}
.fn_cs_project_category ul.posts_list li .title_holder{
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 20px 30px;
	background-color: rgba(0,0,0,0.7);
	z-index: 25;
	opacity: 0;
	visibility: hidden;
}
.fn_cs_project_category ul.posts_list li .title_holder h3{
	margin: 0;
	padding: 0;
	font-size: 20px;
}
.fn_cs_project_category ul.posts_list li .title_holder h3 a{
	color: #eee;
}
.fn_cs_project_category ul.posts_list li .title_holder p{
	margin: 0;
	padding: 0;
	font-size: 16px;
}
.fn_cs_project_category ul.posts_list li .title_holder p a{
	color: #ccc;
}
@media(max-width: 1040px){
	.fn_cs_project_category ul.posts_list li .title_holder{
		opacity: 1;
		visibility: visible;
	}
	.fn_cs_project_moving_title{
		display: none;
	}
}




.fn_cs_why_choose_us{
	width: 100%;
	float: left;
	clear: both;
}
.fn_cs_why_choose_us .wcu_inner{
	width: 100%;
	float: left;
	clear: both;
	display: flex;
	flex-direction: row;
	align-items: center;
}
.fn_cs_why_choose_us .wcu_inner .left_part{
	width: 50%;
	float: left;
	padding-right: 80px;
}
.fn_cs_why_choose_us .wcu_inner .right_part{
	width: 50%;
	float: left;
}
.fn_cs_why_choose_us .wcu_inner .left_part ul{
	margin: 0;
	padding: 0;
	list-style-type: none;
	margin-left: -30px;
}
.fn_cs_why_choose_us .wcu_inner .left_part ul li{
	margin: 0;
	float: left;
	width: 50%;
	padding-left: 30px;
}
.fn_cs_why_choose_us .wcu_inner .left_part ul li .lp_item{
	width: 100%;
	float: left;
	clear: both;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
}
.fn_cs_why_choose_us .wcu_inner .left_part ul li .lp_item img{
	opacity: 0;
}
.fn_cs_why_choose_us .wcu_inner .right_part ul{
	margin: 0;
	padding: 0;
    list-style-type: none;
	margin-left: -30px;
}
.fn_cs_why_choose_us .wcu_inner .right_part ul li{
	width: 100%;
	float: left;
	clear: both;
	padding-left: 30px;
	margin-bottom: 32px;
}
.fn_cs_why_choose_us .wcu_inner .right_part ul li:last-child{
	margin-bottom: 0;
}
.fn_cs_why_choose_us .wcu_inner .right_part ul li .info_item{
	width: 100%;
	float: left;
	clear: both;
	position: relative;
	padding-left: 54px;
}
.fn_cs_why_choose_us .wcu_inner .right_part ul li .info_item h3{
	margin: 0;
	padding: 0;
	font-size: 21px;
    margin-bottom: 24px;
	font-weight: 500;
}
.fn_cs_why_choose_us .wcu_inner .right_part ul li .info_item p{
	margin: 0;
	padding: 0;
}
.fn_cs_why_choose_us .wcu_inner .right_part ul li .info_item .icon{
	position: absolute;
    top: 0px;
    left: 0px;
	display: block;
	width: 30px;
	height: 30px;
}
.fn_cs_why_choose_us .wcu_inner .right_part ul li .info_item .icon i{
	font-size: 30px;
	position: absolute;
	left: 0;
	top: 0;
	color: #ff4b36;
}
.fn_cs_why_choose_us .wcu_inner .right_part ul li .info_item .icon svg,
.fn_cs_why_choose_us .wcu_inner .right_part ul li .info_item .icon .arlo_w_fn_svg{
	width: 30px;
	height: 30px;
	position: absolute;
	left: 0;
	top: 0;
	color: #ff4b36;
}







.fn_cs_single_testimonial_parallax{
	width: 100%;
	float: left;
	clear: both;
	position: relative;
}
.fn_cs_single_testimonial_parallax .testimonial_bg{
	position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 1;
}
.fn_cs_single_testimonial_parallax .testimonial_bg .jarallax{
	position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.fn_cs_single_testimonial_parallax .bg_overlay{
	position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 1;
    background-color: rgba(0,0,0,.8);
}
.fn_cs_single_testimonial_parallax .testimonial_content{
	width: 100%;
    height: auto;
    clear: both;
    float: left;
    position: relative;
    z-index: 2;
    padding: 75px 20px 88px 20px;
}
.fn_cs_single_testimonial_parallax .testimonial_content .content_holder{
	width: 100%;
    max-width: 700px;
    height: auto;
    margin: 0px auto;
    text-align: center;
}
.fn_cs_single_testimonial_parallax .testimonial_content .t_icon{
	display: block;
    margin-bottom: 6px;
}
.fn_cs_single_testimonial_parallax .testimonial_content .t_icon .arlo_w_fn_svg{
	width: 45px;
	height: 45px;
}
.fn_cs_single_testimonial_parallax .testimonial_content .content_holder p{
	margin: 0;
	padding: 0;
	color: #fff;
    font-family: "Raleway";
    font-size: 23px;
    font-weight: 600;
	margin-bottom: 21px;
}
.fn_cs_single_testimonial_parallax .testimonial_content .content_holder h3{
	margin: 0;
	padding: 0;
	font-weight: 400;
	font-size: 18px;
    color: #fff;
	font-family: "Roboto";
}




.fn_cs_triple_blog_shadow{
	width: 100%;
	float: left;
	clear: both;
}
.fn_cs_triple_blog_shadow .inner{
	width: 100%;
	float: left;
	clear: both;
}
.fn_cs_triple_blog_shadow .inner ul{
	list-style-type: none;
	margin: 0;
	margin-left: -50px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
}
.fn_cs_triple_blog_shadow .inner ul li{
	width: 33.3333%;
	padding-left: 50px;
	margin-bottom: 50px;
}
.fn_cs_triple_blog_shadow .inner ul li .item{
	width: 100%;
	float: left;
	clear: both;
	color: rgba(0, 0, 0, 0.08);
	box-shadow: 0 0 30px;
}

.fn_cs_triple_blog_shadow .inner .img_holder{
	width: 100%;
	float: left;
	clear: both;
	position: relative;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.fn_cs_triple_blog_shadow .inner .img_holder img{
	opacity: 0;
}
.fn_cs_triple_blog_shadow .inner .img_holder a{
	top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
	position: absolute;
	display: block;
	z-index: 5;
	text-decoration: none;
}
.fn_cs_triple_blog_shadow .inner .title_holder{
	width: 100%;
	float: left;
	clear: both;
	padding: 32px 40px;
}
.fn_cs_triple_blog_shadow .inner .title_holder h3{
	margin: 0;
	padding: 0;
	font-size: 23px;
}
.fn_cs_triple_blog_shadow.fn_second .inner .title_holder h3{
	margin-bottom: 26px;
}
.fn_cs_triple_blog_shadow .inner .title_holder p.t_info{
	margin: 0;
	padding: 0;
	text-transform: uppercase;
    font-size: 13px;
	border-bottom: 1px solid #e5e5e5;
	padding-bottom: 11px;
	margin-bottom: 12px;
}
.fn_cs_triple_blog_shadow .inner .title_holder p.t_info a{
	text-decoration: none;
    color: #ff4b36;
    position: relative;
    border-bottom: 1px solid transparent;
    transition: all .3s ease;
	font-weight: 400;
}
.fn_cs_triple_blog_shadow .inner .title_holder p.t_info a:hover{
	border-bottom-color: #ff4b36;
}
.fn_cs_triple_blog_shadow .inner .title_holder .b_by{
	margin-right: 24px;
	position: relative;
}
.fn_cs_triple_blog_shadow .inner .title_holder .b_by:after{
	position: absolute;
    content: "";
    width: 1px;
    height: 9px;
    background-color: #6f6f6f;
    top: 3px;
    right: -12px;
    border-radius: 2px;
}






.fn_cs_partners{
	width: 100%;
    height: auto;
    clear: both;
    float: left;
    padding: 70px 0px;
    background-color: #ff4b36;
}
.fn_cs_partners .owl-carousel img{
	width: auto;
	display: inline-block;
}
.fn_cs_partners .owl-carousel .item{
	text-align: center;
}




.fn_cs_useful_information{
	width: 100%;
    height: auto;
    clear: both;
    float: left;
}
.fn_cs_useful_information .info_list ul{
	list-style-type: none;
	margin: 0;
	padding: 0;
}
.fn_cs_useful_information .info_list ul li{
	width: 100%;
	float: left;
	clear: both;
	margin: 0;
	padding: 0;
	margin-bottom: 10px;
}
.fn_cs_useful_information .info_list ul li .info_item {
	width: 100%;
	float: left;
	clear: both;
	position: relative;
	padding-left: 30px;
}
.fn_cs_useful_information .info_list ul li .info_item.no_icon {
    padding-left: 0;
}
.fn_cs_useful_information .info_list ul li .info_item label{
	font-weight: 500;
    color: #000;
    min-width: 85px;
    display: inline-block;
	margin-right: 10px;
}
.fn_cs_useful_information .info_list ul li .info_item span{
	color: #6f6f6f;
}
.fn_cs_useful_information .info_list ul li .info_item a{
	text-decoration: none;
    color: #ff4b36;
    position: relative;
	font-weight: 400;
    border-bottom: 1px solid transparent;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
}
.fn_cs_useful_information .info_list ul li .info_item a:hover{
	border-bottom-color: #ff4b36;
}
.fn_cs_useful_information .info_list ul li span.icon{
	position: absolute;
	left: 0px;
	top: 6px;
	display: block;
	width: 17px;
	height: 17px;
}
.fn_cs_useful_information .info_list ul li span.icon i{
	position: absolute;
	top: 0;
	left: 0;
	font-size: 17px;
}
.fn_cs_useful_information .info_list ul li span.icon .arlo_w_fn_svg{
	width: 17px;
	height: 17px;
	color: #ff4b36;
	position: absolute;
	top: 0;
	left: 0;
}
.fn_cs_useful_information .uinfo_inner{
	display: flex;
	flex-direction: row;
}
.fn_cs_useful_information .uinfo_inner .info_list{
	width: 50%;
	padding-right: 80px;
}
.fn_cs_useful_information .uinfo_inner .contact_part{
	width: 50%;
}

.wpcf7-form input[type=text],
.wpcf7-form input[type=email]{
	width: 100%;
    background-color: transparent !important;
    border: none;
	box-shadow: 0 0 10px rgba(0,0,0,.05);
}
.wpcf7-form textarea{
	width: 100%;
    background-color: transparent !important;
    border: none;
    height: 80px !important;
    resize: none;
	box-shadow: 0 0 10px rgba(0,0,0,.05);
}
.wpcf7-form input[type=submit]{
	text-decoration: none;
    color: #fff;
    background-color: #ff4b36;
    padding: 8px 45px !important;
    font-family: "Raleway"
}
.wpcf7-form p{
	margin-bottom: 25px;
}
div.wpcf7-response-output{
	margin: 0;
	margin-bottom: 20px;
}
span.wpcf7-not-valid-tip{
	margin: 10px 0px -15px 0px;
}


.cons_w_wrapper .fn_cs_hero_header_exclusive > a{
	position: absolute;
    left: 50%;
    bottom: 5%;
    margin-left: -11px;
    z-index: 55;
	color: #fff;
	cursor: pointer;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive > a .arlo_w_fn_svg{
	width: 22px;
	height: 22px;
	color: inherit;
}



.cons_w_wrapper .fn_cs_hero_header_exclusive > a.bounce {
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite; }

@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0); }
  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px); }
  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px); } }

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0); }
  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px); }
  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px); } }



/**/
@media(max-width: 1400px){

	.fn_cs_about_text_slider.fn_classic .info_list ul li{
		margin-bottom: 10px;
	}
	.fn_cs_about_text_slider .info_list ul{
		margin-left: -10px;
	}
	.fn_cs_about_text_slider .info_list ul li{
		padding-left: 10px;
	}
	.fn_cs_about_text_slider .right_part{
		padding-left: 50px;
	}
}
@media(max-width: 1200px){
	.fn_cs_triple_blog_shadow .inner ul li{
		width: 100%;
	}
	.fn_cs_progress_bar_desc .pbd_inner .left_part{
		width: 100%;
		padding-right: 0;
	}
	.fn_cs_progress_bar_desc .pbd_inner .right_part{
		width: 100%;
		margin-top: 50px;
	}
	.fn_cs_services_numbered .snumbered_inner ul li .number_holder h3{
		font-size: 100px;
	}
	.fn_cs_services_numbered .snumbered_inner ul li .item{
		padding-top: 50px;
	}
	.fn_cs_services_numbered .snumbered_inner ul li .item{
		display: block;
	}
	.fn_cs_project_category ul.posts_list{
		margin-left: -20px;
	}
	.fn_cs_project_category ul.posts_list li{
		width: 50%;
		padding-left: 20px;
		margin-bottom: 20px;
	}
	.fn_cs_why_choose_us .wcu_inner .left_part{
		width: 100%;
		padding-right: 0;
	}
	.fn_cs_why_choose_us .wcu_inner .right_part{
		width: 100%;
		margin-top: 50px;
	}
	.fn_cs_why_choose_us .wcu_inner{
		flex-wrap: wrap;
	}
	.cons_w_wrapper .fn_cs_hero_header_exclusive .title_holder h3{
		font-size: 30px;
	}
}
@media(max-width: 768px){
	.fn_cs_project_category ul.posts_list li{
		width: 100%;
	}
	.fn_cs_services_numbered .snumbered_inner ul li{
		width: 100%;
	}
	.fn_cs_services_numbered .snumbered_inner ul li .item{
		padding: 50px 20px 20px 20px;
	}
	.fn_cs_about_text_slider .right_part{
		width: 100%;
		padding-left: 0;
		margin-top: 50px;
	}
	.fn_cs_about_text_slider .left_part{
		width: 100%;
		padding-right: 80px;
	}
	.fn_cs_about_text_slider .about_text_slider{
		flex-wrap: wrap;
	}
	.fn_cs_about_text_slider .left_part .about_image_wrap{
		max-width: fit-content;
		max-width: max-content;
		max-width: intrinsic;
		max-width: -moz-max-content;
		max-width: -webkit-max-content;
	}
	.fn_cs_useful_information .uinfo_inner .info_list{
		width: 100%;
		padding-right: 0;
	}
	.fn_cs_useful_information .uinfo_inner .contact_part{
		width: 100%;
		margin-top: 50px;
	}
	.fn_cs_useful_information .uinfo_inner{
		flex-wrap: wrap;
	}
	.fn_cs_portfolio_details .left_part{
		width: 100%;
		min-width: 100%;
	}

	.fn_cs_team_member .img_holder .social_list{
		transform: translateY(0) !important;
		bottom: 0 !important;
		transition-delay: .2s;
	}
}
@media(max-width: 480px){
	.fn_cs_about_text_slider .info_list ul li{
		width: 100%;
		margin-bottom: 5px;
	}
	.fn_cs_about_text_slider .btn_list ul li{
		margin-bottom: 10px;
		margin-right: 10px;
	}
	.fn_cs_about_text_slider .btn_list ul li a{
		padding-left: 20px;
		padding-right: 20px;
	}
	.fn_cs_why_choose_us .wcu_inner .left_part ul{
		margin-left: -10px;
	}
	.fn_cs_why_choose_us .wcu_inner .left_part ul li{
		padding-left: 10px;
	}
	.fn_cs_team_member .title_holder,
	.fn_cs_project_category ul.posts_list li .title_holder{
		padding: 20px;
	}
	.fn_cs_single_testimonial_parallax .testimonial_content{
		padding: 45px 20px 58px 20px;
	}
	.fn_cs_triple_blog_shadow .inner .title_holder{
		padding: 30px 20px;
	}
	.fn_cs_partners{
		padding: 50px 0px;
	}
}

















.fn_cs_services_numbered.fn_modern .snumbered_inner ul li .item p.desc_h{
	margin-top: 12px;
	margin-bottom: 10px;
	letter-spacing: .5px;
}
.fn_cs_services_numbered.fn_modern .snumbered_inner ul li .item > h3{
	margin-bottom: 0;
}
.fn_cs_services_numbered.fn_modern .snumbered_inner ul li .item{
	padding-top: 46px;
	padding-bottom: 39px;
}
.fn_cs_services_numbered.fn_modern .snumbered_inner ul li .item:after{
	top: 0;
	right: 0;
	bottom: 0;
	position: absolute;
	width: 8px;
	content: '';
	background-color: #ffedeb;
}
.fn_cs_services_numbered.fn_modern .snumbered_inner ul li .number_holder{
	position: relative;
	top: 0;
	left: 0;
	padding-bottom: 22px;
	margin-bottom: 31px;
}
.fn_cs_services_numbered.fn_modern .snumbered_inner ul li .number_holder:after{
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	right: -100px;
	height: 8px;
	background-color: #ffedeb;
}
.fn_cs_services_numbered.fn_modern .snumbered_inner ul li .number_holder h3{
	font-size: 16px;
	color: #ff4b36;
}
.fn_cs_services_numbered.fn_modern .snumbered_inner ul{
	margin-left: -30px;
}
.fn_cs_services_numbered.fn_modern .snumbered_inner ul li{
	padding-left: 30px;
	margin-bottom: 30px;
}

@media(max-width: 1300px){
	.fn_cs_services_numbered.fn_modern .snumbered_inner ul li{
		width: 50%;
	}
}






.fn_cs_counter_with_descr{
	width: 100%;
	float: left;
	clear: both;
}
.fn_cs_counter_with_descr .top_part{
	width: 100%;
	float: left;
	clear: both;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 50px;
}
.fn_cs_counter_with_descr .top_part h3{
	max-width: 400px;
	margin: 0;
    padding: 0;
	margin-right: 50px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.4;
    color: #000;
}
.fn_cs_counter_with_descr .top_part h3 span{
	color: #ff4b36;
}
.fn_cs_counter_with_descr .top_part p{
	margin: 0;
	padding: 0;
	margin-left: auto;
	max-width: 50%;
	padding-left: 35px;
	border-left: 4px solid #ff4b36;
}
.fn_cs_counter_with_descr .bottom_part{
	width: 100%;
    float: left;
    clear: both;
}
.fn_cs_counter_with_descr .bottom_part ul{
	list-style-type: none;
	margin: 0;
	padding: 0;
	margin-left: -20px;
}
.fn_cs_counter_with_descr .bottom_part ul li{
	width: auto;
	float: left;
	padding-left: 20px;
	margin: 0;
	margin-bottom: 20px;
}
.fn_cs_counter_with_descr .bottom_part ul li div{
	width: 100%;
    float: left;
    clear: both;
	position: relative;
    line-height: 1.6;
    padding: 10px 20px;
    background-color: #ffedeb;
    border-radius: 3px;
    overflow: hidden;
}
.fn_cs_counter_with_descr .bottom_part ul li div label{
	min-width: inherit;
    margin-right: 40px;
    position: relative;
	font-weight: 500;
    color: #000;
    display: inline-block;
}
.fn_cs_counter_with_descr .bottom_part ul li div label:after{
	content: '';
    width: 20px;
    height: 1px;
    background-color: #ff4b36;
    position: absolute;
    top: 50%;
    left: 100%;
    margin-left: 10px;
    margin-top: -1px;
}
@media(max-width: 768px){
	.fn_cs_counter_with_descr .top_part{
		flex-wrap: wrap;
		flex-direction: column;
		align-items: flex-start;
	}
	.fn_cs_counter_with_descr .top_part h3{
		max-width: 100%;
		margin-right: 0;
	}
	.fn_cs_counter_with_descr .top_part p{
		max-width: 100%;
		margin-top: 30px;
	}
}
@media(max-width: 1400px){
	.fn_cs_counter_with_descr .bottom_part ul{
		margin-left: -10px;
	}
	.fn_cs_counter_with_descr .bottom_part ul li{
		padding-left: 10px;
		margin-bottom: 10px;
	}
}




.fn_cs_title_with_desc{
	width: 100%;
	float: left;
	clear: both;
}
.fn_cs_title_with_desc h3{
	margin: 0;
    padding: 0;
    margin-bottom: 35px;
    font-size: 30px;
    font-weight: 600
}
.fn_cs_title_with_desc h3 span{
	color: #ff4b36;
}
.fn_cs_title_with_desc .title_holder p{
	margin: 0;
	padding: 0;
}


.fn_cs_triple_blog_shadow.fn_second .inner .title_holder p.t_read{
	margin: 0;
	padding: 0;
}
.fn_cs_triple_blog_shadow.fn_second .inner .title_holder p.t_read a{
	text-decoration: none;
    color: #ff4b36;
    border-bottom: 1px solid transparent;
    transition: all .3s ease;
    font-size: 16px;
}
.fn_cs_triple_blog_shadow.fn_second .inner .title_holder p.t_read a:hover{
	border-bottom-color: #ff4b36;
}
.fn_cs_triple_blog_shadow.fn_second .inner .title_holder p.t_info{
	border-bottom: none;
	position: relative;
	margin-bottom: 33px;
}
.fn_cs_triple_blog_shadow.fn_second .inner .title_holder p.t_info:after{
	content: '';
	position: absolute;
	width: 100px;
	height: 2px;
	background-color: #ccc;
	top: 100%;
	left: 0;
}
.fn_cs_triple_blog_shadow.fn_second .inner .title_holder p.t_info:before{
	content: '';
	position: absolute;
	width: 50px;
	height: 2px;
	background-color: #ccc;
	top: 100%;
	left: 0;
	margin-top: 7px;
}




svg.fn_elegant_shape.second{
	transform: rotate(90deg);
	animation: 25s morphy2 infinite;
}
svg.fn_elegant_shape {


	position: absolute;
	top: 50%;
	left: 50%;

	z-index: -1;
}
svg.fn_elegant_shape.first{
	animation: 25s morphy infinite;
}
svg.fn_elegant_shape.other_svg{
	width: 440px;
	margin: -220px 0px 0px -220px;
}
svg.firefox_svg{
	width: 330px;
	height: 330px;
	margin: -165px 0 0 -165px;

}
svg.fn_elegant_shape{
	fill: currentcolor;
}
svg.fn_elegant_shape.other_svg path{
  d:path('M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45	c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2	c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7	c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z');
  animation: morph 12s infinite;
}

svg.fn_elegant_shape.other_svg path{
  d:path('M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6	c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8	C48.9,198.6,57.8,191,51,171.3z');
}

@keyframes morph {
  0%, 100%{
    d:path('M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45	c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2	c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7	c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z');
  }
  50%{
    d:path('M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6	c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8	C48.9,198.6,57.8,191,51,171.3z')
  }
}

@keyframes morphy {
  0%{
    transform: rotate(0);
  }
  50%{
    transform: rotate(180deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
@keyframes morphy2 {
  0%{
    transform: rotate(90deg);
  }
  50%{
    transform: rotate(-90deg);
  }
  100%{
    transform: rotate(-270deg);
  }
}
.cons_w_wrapper .fn_cs_hero_header_exclusive.fn_elegant{
	overflow: hidden;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive.fn_elegant .content_holder{
	align-items: center;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive.fn_elegant .title_holder{
	margin: 0;
	text-align: left;
	padding: 41px 0 50px 0;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive.fn_elegant .title_holder h3{
	font-family: "Kaushan Script", Sans-serif;
    font-weight: 500;
    line-height: 72px;
    letter-spacing: 0.5px;
	text-transform: capitalize;
	margin: 0;
	margin-bottom: 8px;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive.fn_elegant .title_holder p{
	font-size: 30px;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive.fn_elegant .title_holder:after{
	width: 1px;
	bottom: 100%;
	top: -3000px;
	content: '';
	position: absolute;
	background-color: rgba(255,255,255,.1);
	left: 0;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive.fn_elegant .title_holder:before{
	width: 1px;
	top: 100%;
	bottom: -3000px;
	content: '';
	position: absolute;
	background-color: rgba(255,255,255,.1);
	left: 0;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive.fn_elegant .content_holder .t_image{
	width: 300px;
	min-width: 300px;
	height: 300px;
	margin: 0;
	left: 0;
	position: relative;
}
.cons_w_wrapper .fn_cs_hero_header_exclusive.fn_elegant .t_image:after{
	display: none;
}
@media(max-width: 1040px){
	.cons_w_wrapper .fn_cs_hero_header_exclusive.fn_elegant .content_holder{
		flex-direction: column;
	}
	.cons_w_wrapper .fn_cs_hero_header_exclusive.fn_elegant .content_holder .t_image{
		margin-right: 0;
		margin-bottom: 100px;
	}
	.cons_w_wrapper .fn_cs_hero_header_exclusive.fn_elegant .title_holder:after,
	.cons_w_wrapper .fn_cs_hero_header_exclusive.fn_elegant .title_holder:before{
		display: none;
	}
	.cons_w_wrapper .fn_cs_hero_header_exclusive.fn_elegant .title_holder{text-align: center;}
}

  pre[class*="language-"] {
    background: rgba(245, 245, 245, 1);
    color: rgb(65, 76, 94);  }

  @media only screen and (max-width: 870px) {
    .gatsby-highlight {
      margin: 15px -15px;

      pre[class*="language-"] {
        padding: 25px;
      }
    }
  }
`;
export default GlobalStyle;
