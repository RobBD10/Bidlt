var React = require('react');
var SideNav = require('../global/side-nav.js');
var Header = require('../global/header.js');
var Footer = require('../global/footer.js');


var BuilderTemplate = React.createClass({

  render: function(){
    var navArr = [{name:'Overview',url:'/BuilderTemplate', icon:'dashboard'}, {name:'Current Jobs',url:'/BuilderTemplate/CurrentJobs', icon:'event'}, {name:'Available Jobs',url:'/BuilderTemplate/AvailableJobs', icon: 'work'},{name:'Back Office',url:'/backOffice', icon: 'receipt'},{name:'Wall',url:'/wall', icon:'chat_bubble_outline'},{name:'Search & Hire',url:'/seachHire', icon: 'build'}, {name:'Safeguarding',url:'/safeguarding', icon: 'thumb_up'}];
    console.log("rendering builder template");

    return (
      <div className="">
        <SideNav navArray={navArr} interface={'BILDT: Builder'}/>
        <Header name={"Sohil's Company"} address={'14 Palmers Road, Mile End, London'}/>
        {this.props.children}
        <Footer />

      </div>
    );
  }
});

module.exports = BuilderTemplate;
