<template>
  <div class="connect-privacy-content">
    <div class="body-part">
      <div class="">
        <div class="">
          <p>Terms & Conditions - last updated 21th Mar 2018</p>
          <p>
            The following information defines the conditions under which the use of Dbit is operated by
            Otron inc., incorporated at Yanta District. 01/2018 Xi'an China..
          </p>
          <p>
            Only these Terms and Conditions apply to any contract made between us in relation to services
            provided by Dbit. These conditions are accepted by the entirety of our community during
            the registration stage by checking the option entitled “I accept the Terms and Conditions & Privacy
            Policy.” Any deviations from these specified conditions are not accepted.
          </p>
          <p>&nbsp;&nbsp;</p>
          <p>
            1. Description of the scope of service
          </p>
          <p>
            Dbit operates an news and briefs platform and provides customers with free services related
            with blockchain.
          </p>
          <p>
            All customers can register for free, read the latest news, or engage with the community on our
            Blockchain Forum. All the service is free.
          </p>
          <p>
            Dbit is entitled to engage third party service providers and agents for the whole spectrum
            of the Dbit service. However, this should not negatively impact the customer.
          </p>
          <p>
            Dbit ensures service availability for 99% of the calendar year. This does not include
            failures of the service, for example for essential maintenance or technical failures of the
            Internet.
          </p>
          <p>
            To be able to use the Dbit service in full, the customer should use the latest (browser-)
            technologies and make sure the necessary settings and installations for use are in place (e.g.
            activation of JavaScript, cookies). When using older or not commonly used technologies, members may
            only have a limited use of the Dbit service.
          </p>
          <p>
            2. Access / Contract Confirmation
          </p>
          <p>
            In order for customers to access Dbit services better, they need register. For the
            registration the customer requires a valid phone number, his nick name and gender.
          </p>
          <p>
            Once an phone number is entered into our website, registration is considered complete. The registered
            user then enters into a contractual relationship with Dbit for a free membership. This is
            governed by the provisions set out in these terms and conditions.
          </p>
          <p>
            3. Data Use, Data Sharing and Data Forwarding
          </p>
          <p>
            Dbit takes care to respect the legal data protection regulations.
          </p>
          <p>
            4. Cancellation, Termination
          </p>
          <p>
            The cancellation of the free membership (deleting the profile) is possible at any time. To do this,
            write a short email to service@thedbit.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TermsConditions",
    head () {
      return {
        meta: [
          {  rel: 'nofollow' },
        ]
      }
    },
    methods:{
      close(){
        this.$emit('terms',
          this.model = !this.model
        )

      },
    },
  }
</script>

<style lang="less"  scoped>
  .connect-privacy-content{
    width: 1024px;

    background: #FFFFFF;
    border-radius: 3px;
    position: relative;
    margin: 20px 0;
    padding: 20px 0;
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
