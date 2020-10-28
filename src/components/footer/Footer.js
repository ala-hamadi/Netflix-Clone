import React from 'react'
import * as styles from './StylesFooter'

const Footer=()=> {
    return (
        <styles.Container>
            <styles.Title>Questions? Contact us.</styles.Title>
            <styles.Break />
            <styles.Row>
                <styles.Column>
                    <styles.Link href="#">FAQ</styles.Link>
                    <styles.Link href="#">Investor Relations</styles.Link>
                    <styles.Link href="#">Privacy</styles.Link>
                    <styles.Link href="#">Speed Test</styles.Link>
                </styles.Column>
                <styles.Column>
                    <styles.Link href="#">Help Center</styles.Link>
                    <styles.Link href="#">Jobs</styles.Link>
                    <styles.Link href="#">Cookie Preferences</styles.Link>
                    <styles.Link href="#">Legal Notices</styles.Link>
                </styles.Column>
                <styles.Column>
                    <styles.Link href="#">Account</styles.Link>
                    <styles.Link href="#">Ways to Watch</styles.Link>
                    <styles.Link href="#">Corporate Information</styles.Link>
                    <styles.Link href="#">Netflix Originals</styles.Link>
                </styles.Column>
                <styles.Column>
                    <styles.Link href="#">Media Center</styles.Link>
                    <styles.Link href="#">Terms of Use</styles.Link>
                    <styles.Link href="#">Contact Us</styles.Link>
                </styles.Column>
            </styles.Row>
            <styles.Break />
            <br />
            <styles.Text>Netflix Tunisia</styles.Text>
        </styles.Container>
    )
}

export default Footer
