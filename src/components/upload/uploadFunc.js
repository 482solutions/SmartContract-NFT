import React, {useState} from 'react';
import ipfsHttpClient from 'ipfs-http-client';


const IPFSLOAD = (props) => {
    const [ipfs, setIpfs] = useState(ipfsHttpClient("https://ipfs.infura.io:5001/"));
    const [hash, addFileHash] = useState(null)

    const captureFile = e => {
        e.stopPropagation();
        e.preventDefault();
        saveToIpfs(e.target.files)
    }

    const saveToIpfs = async ([ file ], a, b )  => {
        try {
            const added = await ipfs.add(
                file,
                {
                    progress: (prog) => console.log(`received: ${prog}`)
                }
            );
            console.log(added)
            addFileHash(added.cid.toString());
            props.hash(added.cid.toString())
            props.setFile(file)
        } catch (err) {
            console.error(err)
        }
    };

    const handleSubmit = e =>{
        e.preventDefault()
    };

    if (ipfs) {
        return (
            <div>
                <form id='capture-media' onSubmit={handleSubmit}>
                    <input type='file' name='input-file' id='input-file' onChange={captureFile} style={{marginTop: "25px"}}/><br/>
                </form>
            </div>
        )
    }
};

export default IPFSLOAD;