<template>
  <div class="connect-privacy-content">
    <div class="body-part">
      <div class="">
        <p>
          Privacy Policy
        </p>
        <p>
          Last updated: Mar 21th, 2018
        </p>
        <p>&nbsp;&nbsp;</p>
        <p>
          Our Policy
        </p>
        <p>
          Welcome to the web site (the "Site") of Xi'an Aozhong interactive Brand Planning Co., Ltd. (doing
          business as Dbit). This Site is operated by Dbit and has been created to provide
          information about Industry news, briefs and other blockchain related services, whether accessible to
          you via web, mobile app or other platform (our services, together with the Site, are the "Services")
          by visitors and users of the Services ("you" and/or "your").
        </p>
        <p>
          This Privacy Policy sets out Dbit's policy with respect to information, including in
          particular information which identifies you personally and other information that is collected from
          visitors and users of the Services.
        </p>
        <p>
          Please read this privacy policy carefully so that you understand how we will treat your information.
          By using any of our Services, you confirm that you have read, understood and agree to this privacy
          policy. If you do not agree to this policy, please do not use any of the Services. If you have any
          queries, please email us at service@thedbit.com
        </p>
        <p>
          Who we are:
        </p>
        <p>
          We are Otron inc., incorporated at Yanta District. 01/2018 Xi'an China.
        </p>
        <p>
          We will refer to these companies together as "Dbit", "we", "us" and/or "our".
        </p>
        <p>
          Information We Collect:
        </p>
        <p>
          When you interact with us through the Services, we may collect Personal Data and other information
          from you, as further described below:
        </p>
        <p>
          Personal Data That You Provide Through the Services: We collect Personal Data from you when you
          voluntarily provide such information, such as when you register for access to the Services, respond
          to one of our surveys, or use certain Services, which may includes your: (i) nick name; (ii)
          telephone number; (iii) email address; (iv) your IP address; and (v) any other personal information
          which you give us in connection with the Services.
        </p>
        <p>
          Wherever Dbit collects Personal Data we make an effort to provide a link to this Privacy
          Policy.
        </p>
        <p>
          By voluntarily providing us with Personal Data, you are consenting to our use of it in connection
          with the Services and in accordance with this Privacy Policy.
        </p>
        <p>
          Non-Identifiable Data: When you interact with Dbit through the Services, we receive and
          store certain information which does not identify you personally. Such information is collected
          passively using various technologies. This includes:
        </p>
        <p style="text-indent: 20px;">
          i. Technical or other details about any device which you use to access the Services, including:
          Internet and/or network connection; any device Unique Device Identifier (UDID) or equivalent; your
          operating system, browser type; your hardware or mobile device details (including your mobile device
          type and number and mobile carrier details), if applicable; or other technical details. This is
          technical data about our users and their actions and patterns, which we do not believe identifies
          any individual;
        </p>
        <p style="text-indent: 20px;">
          ii. Details of your use of our Services including, but not limited to: metrics information about when
          and how you use the Services; traffic data; and maybe your geographical location data.
        </p>
        <p>
          Dbit may store such information itself or such information may be included in databases
          owned and maintained by Dbit's affiliates, agents or service providers. The Services may
          use such information and pool it with other information on an anonymised and generalised basis to
          track, for example, the total number of users of our Services, the number of visitors to each page
          of our Site and the domain names of our visitors' Internet service providers. It is important to
          note that no Personal Data is available or used in this process.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Privacy",
    head () {
      return {
        meta: [
          {  rel: 'nofollow' },
        ]
      }
    },
  }

</script>

<style lang="less" scoped>
  .connect-privacy-content{
    width: 1024px;
    background: #FFFFFF;
    border-radius: 3px;
    position: relative;

    padding: 20px 0;
    margin: 20px 0;
  }
  .close{
    position: absolute;
    right: 20px;
    top:20px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  .body-part{
    margin: 0 30px;
    h2{
      font-family: Helvetica-Bold;
      font-size: 14px;
      color: #333333;
      letter-spacing: 0;
      text-align: left;
      margin-top: 30px;
    }
    h5{
      font-family: Helvetica;
      font-size: 12px;
      color: #999999;
      letter-spacing: 0;
      text-align: left;
      margin-top: 5px;
    }
    p{
      font-family: Helvetica;
      font-size: 14px;
      color: #666666;
      letter-spacing: 0;
      text-align: left;
      line-height: 20px;
      margin: 20px 0;
      span{
        display: block;
        color: #333333;
      }
    }
  }
</style>
