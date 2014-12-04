/**
 * Canon for Jenkins Javascript Overrides
 *
 * Leverages Jenkins-included Prototype.js
 *
 * @author Rackspace Web Team
 */
document.observe("dom:loaded", function () {
    // Auto Refresh
    var autoRefreshSelector = $$('#right-top-nav #right-top-nav div.smallfont');
    if (autoRefreshSelector.length > 0) {
        var autoRefreshLink = new Element('span').update(autoRefreshSelector[0].innerHTML);
        $$('span.jenkins_ver')[0].insert({before:autoRefreshLink});
    }

    // Replace logo with Orange logo
    $$('#jenkins-head-icon')[0].replace('<img id="jenkins-head-icon" width="34px" height="34px" style="bottom:3px;" alt="title" src="data:image/gif;base64,R0lGODlhNQA1APcAAO/v78HBw8/Pz6aoqPLz8/7+/tnZ2fDw8MvLzMfIyvz8/Orr69vb2+Tl5bq7u/b29q+wsfT09Ojo6MjIyP39/b/AwP1qAt/g4JmZmWlqa8zNzvj4+F9hYv9mBIKBgtXU1P9hAPlmAfyNQMTFxvr6+nV2d9XW1lVWVuzs7EdISPHx8fJ/Kv1lCf799PzWuPvbxviufPHy8nFvbv50Fv///Pb//qKjo+13OexpHflnB6ysrff39/m3hvZqAtnc3PphAf3+/aCgoO+PL//8/8zMzJeZmvzFlNfY2OpbEf76/pWVmHBaQe/BpDY3N/5VAI+Pju5yHsC+vvrKp5yfoOvKtPaFOvSfZe9qD/1qEa6ur/Ly8u7SwpKSk/v+///8+/zkz5Z7Uuvk4dfX1/14Cu+BOvOSTf9hBeCxhTg5P/Olc5iYmO7u7+6DRMzN1fDv8P3s3+iJWp2dnv708yoqKvrWmfPt7Jucns5rMu54J/fz8uj0+P3hsrN3Mff08eiwHfbx7/JkAu+SWfjNtuhZIcBgKvK9qP706uhZI5ZkNO7v7+yGX/X68O6Qj/6UE+yEXOlZIux9U/G7pc3Ly+6Zd/3CZulYIOyEW+1zJPPRxO2Nad3JwvG7pu/v7ux/VHM4PPbv7fKwrex9UvK/q/ulItbSefGJRNWsPe+ihNykf+hZIktLS/i8kfK9qfPPwu7u7v9mAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAALEALAAAAAA1ADUAAAj/ALFYAAHilcGDCBMqXMiw4cEcIHp0sOCwosWLBy1QxMixI8IrISjm0BiypAWTKE+qTMlypUuTBi10COGxJkaNZjrY3NmQRUKdQF8FHSq0KNGjRpMO1cmzqdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu27dccr36AwBLCJ9keGlX26EHWp88OdsmO/LGRJtkOIK6AkLuR7I8eIQfyNWvBzFwzZK+MMcLDyAopFEHAZQpiI+LShA0bnivxFYiQBXWWtnvylRnMZmCIMOJCzsEeWCLOEIHlSu2BWFZYYAFCxAwWFgiDMGOhygyKPUDMqDIQ+isLPZxf/4HBhscLHhlzQHmRZEgNFwJhdPli6MUMKS26tHhT5dWXAkbUAEsLVryChRQKFLDIGzSIwAIPQLRQgAvXXSEUXK5Z4EILcrzQQgsv5MBDATV44YIVXnzBwxctSMFCEkmQIMUXNbyRAwxJtADDHkAUIAKKcsDgwhAuTAQdXASt8GF/VXShwAowELncKyvMYEWALlhQQAtlWCBCCzT4RyCVOYrgghdGVFEGmDMA8gqG34ng3ncWwCgCDy3wMNAKLhRAwxBJvGBBDUOI0EEVNdRghgIN1pVEFyIkQQOYNHQBKUWGxSnpQB14ASkPXsAwkguwSDEDD0Re8WEZzQ3RwiuEdv85aAtVvJGEbiLkOkNcGn33wwywDAGDBTDAosAMMNAAg0E1FFBGDlLU8AIIBVAgQnM1AAGCC0l8IYIUXtRQxRalTiSFFYEZxkIIMLRQ4hAU8DAeLOhpWCKDQwjqqQiviMColwpEKKG1K0w6qbQzEMbXRhZcYYULL5xY2sNW/PAKFEa8IAUM52nowgo9rBAxIB3cKUgZNdDAHRkZuwBDwoCxwMJeGuUQQgcTFXUQQRSt6xpcWIwWAhaWcSyFCDgOAYVQy0EWwgw0yeQrQafFhuFIpRVEUV5Mh/RKSGV4UQAQNSSh5yutoRZTBzn8RRMIOkn9XdTR5TwzY3bBPRAIUMIuAAN3NCH2dUYxvSLzdweFgNeb0MkUXUgWDzSQQVhY7FNBpQml05EZ/mCzQSwEBAA7">');

    // Click logo, go home.
    $$('div.logo')[0].on('click', function(){ location = '/'; });
});