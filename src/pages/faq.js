import * as React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Card from 'components/Card'

import { CardsContainer, Document } from 'styles/faq'

export default function Docs() {
    return (
        <Layout>
            <SEO title='FAQ' />
            <CardsContainer>
                <h1 className='section-title'>Frequently Asked Questions</h1>
                <div className='cards'>
                    <Card
                        title='Shoppers'
                        description='How it works, Privacy topics, Shopper Dashboard, Troubleshooting etc'
                        btnText='See more'
                    />
                    <Card
                        title='Sellers'
                        description='How it works, Payments, Refunds, Seller Dashboard, Docs, Troubleshooting etc'
                        btnText='See more'
                    />
                </div>
            </CardsContainer>
            <Document>
                <h2>Shoppers</h2>
                <h3>What is Simpler Checkout? How does it work?</h3>
                <p>
                    1. You click on the Simpler Quick Buy button that you see on
                    a store, website, ad or social media platform
                </p>
                <p>
                    2. You save your basic information during your first
                    transaction with a seller within the Simpler network. No
                    password is needed. Info is saved once and then never asked
                    again.
                </p>
                <p>3. That’s it! Your order is on its way.</p>
                <p>
                    4. Any time you see the Simpler Quick Buy button again, on
                    any website, your information is saved so you don't have to
                    enter it again.
                </p>
                <h3>
                    What happens if I already have an account with Simpler and
                    want to checkout from a new device?
                </h3>
                <p>
                    If you are trying to checkout with a new device, the Simpler
                    form will appear as if you were a new user. When you enter
                    your email, you will be prompted to fill in the 6-digit
                    authorisation code sent to your email. When you add the
                    code, your saved information will appear, so you won’t have
                    to add it ever again to checkout with Simpler on that
                    device.
                </p>
                <h3>
                    Why didn’t I need to use a username or a password to create
                    an account?
                </h3>
                <p>
                    As we see it, usernames and passwords are obsolete - humans
                    just can’t remember hundreds of strong passwords. At Simpler
                    we are using passwordless authentication methods that fight
                    password fatigue and provide a great user experience.
                </p>
                <h3>What information can I see in the dashboard?</h3>
                <p>
                    The post-purchase experience is also very important and we
                    are on a mission to fix that too. Every order you make
                    through Simpler will be shown in your dashboard at
                    shopper.simpler.so, so you’ll have everything under one roof
                    - you can see and track all your orders, manage your
                    returns, download your receipts, reorder with one click -
                    anything.
                </p>
                <h3>
                    What emails should I be expecting from Simpler after I
                    complete an order?
                </h3>
                <p>
                    You will just receive an order confirmation email, to let
                    you know that the store has received your order and after
                    that, your seller will be sending you emails directly about
                    your order status or any shipping updates.
                </p>
                <h3>Why can’t I see the checkout window?</h3>
                <p>
                    Make sure you are not using any ad blockers in your browser
                    that might be blocking the Simpler pop-up.
                </p>
                <h3>What kind of cards do you accept?</h3>
                <p>
                    Simpler accepts all local and international prepaid, debit
                    and credit cards.
                </p>
                <h2 className='special-title'>Privacy & Security</h2>
                <h3>
                    What information do you collect? How do you handle data?
                </h3>
                <p>
                    We collect the data you provide to us, which is securely
                    stored and tokenised/encrypted. This information is used
                    only for shopping purposes, ie so that the merchant can
                    fulfil your order. We also collect information about your
                    device. You can manage your profile and your connected
                    devices from your shopper dashboard.
                </p>
                <h3>
                    Do you share the email addresses of the shoppers with the
                    merchant?
                </h3>
                <p>
                    When the shoppers click on the Simpler checkout button, we
                    share their email address with the merchant, who can use it
                    for communication and order fulfillment purposes. You can
                    opt out from such communication at any time.
                </p>
                <h3>What happens if my email account is hacked?</h3>
                <p>
                    Please reach out to us at{' '}
                    <a href='mailto:support@simpler.so'>support@simpler.so</a>{' '}
                    if you believe your Simpler account or your email account
                    has been compromised. We’ll work with you to help protect
                    your account and prevent any risks.
                </p>
                <h3>Is Simpler PCI compliant?</h3>
                <p>
                    Through our partners, Simpler complies with Level 1 Payment
                    Card Industry Data Securities Standards (PCI-DSS), which is
                    the highest standard of PCI compliance.
                </p>
                <h3>How do I delete my information?</h3>
                <p>
                    You can learn more about how we handle personal data in our{' '}
                    <Link to='/buyers-privacy-policy' className='link'>
                        Privacy Policy
                    </Link>
                    . In case you want us to delete all your information please
                    reach out to us at{' '}
                    <a href='mailto:support@simpler.so'>support@simpler.so</a>.
                </p>
                <h2 className='section'>Sellers</h2>
                <h3>How do I install Simpler Checkout to my website?</h3>
                <p>
                    Simpler Checkout can be installed as a plugin to any
                    WooCommerce website via a zero code, 5-minute process. You
                    can follow the instructions{' '}
                    <Link to='/docs' className='link'>
                        here
                    </Link>
                    .
                </p>
                <h3>
                    My website does not use wooCommerce, how do I install
                    Simpler Checkout?
                </h3>
                <p>
                    We would be glad to offer you custom integration support!
                    Just fill in the form{' '}
                    <Link to='/get' className='link'>
                        here
                    </Link>
                    , and a member of our technical team will contact you
                    shortly to learn more about your custom needs.
                </p>
                <h3>How much does Simpler Checkout cost?</h3>
                <p>
                    Simpler Checkout is an all-in-one checkout solution that
                    comes with its own payment processor. This means that
                    Simpler gets a small fraction of the payment processing fee.
                    You can find detailed pricing details in our pricing page.
                </p>
                <h3>How does Simpler Checkout increase my sales?</h3>
                <p>
                    Every step a customer has to take in a conventional checkout
                    flow introduces friction. We are relentlessly working on
                    optimising our checkout flow to be simple, mobile optimised
                    and robust, in order for you to focus in what matters
                    instead of worrying about optimising your checkout.
                </p>
                <br />
                <p>
                    At the same time, we partner with the best payment services
                    available in order to attain the best authorisation rates,
                    eliminate fraud and ensure that all payment best practices
                    are followed.
                </p>
                <h3>Which payment methods does Simpler support?</h3>
                <p>
                    Simpler supports all major debit, credit and prepaid card
                    issuers, including VISA, MasterCard, American Express,
                    Diners etc.
                </p>
                <h3>What happens when a shopper clicks on Simpler Checkout?</h3>
                <p>
                    When a shopper clicks on the Simpler checkout button, the
                    Simpler window will appear.
                </p>
                <br />
                <p>
                    If the shopper does not already have an account with
                    Simpler, the shopper is prompted to fill in a lean form with
                    the absolutely necessary fields (30% fewer than the average
                    checkout). Info is saved once and then never asked again.
                </p>
                <br />
                <p>
                    If the shopper already has an account with Simpler, all
                    information will be pre-filled so the shopper will just have
                    to confirm all the details and place the order with one
                    click.
                </p>
                <h3>
                    How does an existing user login to their Simpler account?
                </h3>
                <p>
                    When the shopper clicks on the Simpler Checkout button, they
                    will be prompted to enter their email address. If that email
                    exists in our system, an authorisation code will be sent to
                    their email address so that they can log in and retrieve
                    their stored info to checkout faster.
                </p>
                <h3>How does a shopper add new shipping or payment details?</h3>
                <p>
                    Customers can edit or add new shipping addresses or payment
                    options in the order confirmation screen or on their Shopper
                    Dashboard at shopper.simpler.so
                </p>
            </Document>
        </Layout>
    )
}
