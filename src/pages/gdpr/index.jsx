const { Gdpr } = require("@/app/components/privacy-policy/gdpr");

function GdprPage(){
    return(
        <div className="container" style={{textAlign:'justify'}}>
            <Gdpr/>
        </div>
    )
}

export default GdprPage;