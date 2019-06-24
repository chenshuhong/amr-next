import React from "react";
import Link from 'next/link'
import './index.less'

export default () => <div className='example'>
  <Link href="/hello">
    <a>go to hello</a>
  </Link>
</div>
