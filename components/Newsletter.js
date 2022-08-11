import Link from "next/link";
import styles from "../pages/index.module.css";
  
  const Newsletter= () => (
    <div className="Newsletter">
        <h2>Enjoyed this post? Subscribe to the newsletter!</h2>
        <p>A newsletter of how a mid-career professional overcame inertia to build a better future.</p>
        <p>No spam ever, unsubscribe any time.</p>
        <form action="https://tinyletter.com/gridnorth" method="post"><p><label for="tlemail">Enter your email address</label></p><p><input type="text" name="email" id="tlemail" /></p><input type="hidden" value="1" name="embed"/><input type="submit" value="Subscribe" /><p><a href="https://tinyletter.com" target="_blank"></a></p></form>
    </div>
  );
  
  export default Newsletter;