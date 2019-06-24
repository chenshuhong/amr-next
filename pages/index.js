import React from "react";
import Link from 'next/link'
import './index.less' //fix https://github.com/zeit/next-plugins/issues/282

export default () => <div className='example'>
  <Link href="/hello">
    <a>go to hello</a>
  </Link>
</div>
