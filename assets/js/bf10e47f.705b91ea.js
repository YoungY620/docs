"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9055],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return t?i.createElement(h,r(r({ref:n},u),{},{components:t})):i.createElement(h,r({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=t(7462),a=(t(7294),t(3905));const l={sidebar_position:2},r="2.3.2 Build with WASI-nn Plugin",o={unversionedId:"contribute-guide/source/plugin/was_nn",id:"contribute-guide/source/plugin/was_nn",title:"2.3.2 Build with WASI-nn Plugin",description:"Prerequisites",source:"@site/docs/contribute-guide/source/plugin/was_nn.md",sourceDirName:"contribute-guide/source/plugin",slug:"/contribute-guide/source/plugin/was_nn",permalink:"/book/docs/contribute-guide/source/plugin/was_nn",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/contribute-guide/source/plugin/was_nn.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"contributeSidebar",previous:{title:"2.3.1 Build with WASI-Crypto Plugin",permalink:"/book/docs/contribute-guide/source/plugin/wasi_crypto"},next:{title:"2.3.3 Build with WasmEdge-httpsReq Plugin",permalink:"/book/docs/contribute-guide/source/plugin/httpsreq"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build WasmEdge with WASI-NN OpenVINO Backend",id:"build-wasmedge-with-wasi-nn-openvino-backend",level:2},{value:"Build WasmEdge with WASI-NN PyTorch Backend",id:"build-wasmedge-with-wasi-nn-pytorch-backend",level:2},{value:"Build WasmEdge with WASI-NN TensorFlow-Lite Backend",id:"build-wasmedge-with-wasi-nn-tensorflow-lite-backend",level:2}],u={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"232-build-with-wasi-nn-plugin"},"2.3.2 Build with WASI-nn Plugin"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Currently, WasmEdge used OpenVINO\u2122 or PyTorch as the WASI-NN backend implementation. For using WASI-NN on WasmEdge, you need to install ",(0,a.kt)("a",{parentName:"p",href:"https://docs.openvino.ai/2021.4/openvino_docs_install_guides_installing_openvino_linux.html#"},"OpenVINO\u2122"),"(2021) or ",(0,a.kt)("a",{parentName:"p",href:"https://pytorch.org/get-started/locally/"},"PyTorch 1.8.2 LTS")," for the backend."),(0,a.kt)("p",null,"By default, we don't enable any WASI-NN backend in WasmEdge. Therefore developers should ",(0,a.kt)("a",{parentName:"p",href:"/book/docs/contribute-guide/source/os/linux"},"build the WasmEdge from source")," with the cmake option ",(0,a.kt)("inlineCode",{parentName:"p"},"WASMEDGE_PLUGIN_WASI_NN_BACKEND")," to enable the backends."),(0,a.kt)("h2",{id:"build-wasmedge-with-wasi-nn-openvino-backend"},"Build WasmEdge with WASI-NN OpenVINO Backend"),(0,a.kt)("p",null,"For choosing and installing OpenVINO\u2122 on ",(0,a.kt)("inlineCode",{parentName:"p"},"Ubuntu 20.04")," for the backend, we recommend the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export OPENVINO_VERSION="2021.4.582"\nexport OPENVINO_YEAR="2021"\ncurl -sSL https://apt.repos.intel.com/openvino/$OPENVINO_YEAR/GPG-PUB-KEY-INTEL-OPENVINO-$OPENVINO_YEAR | sudo gpg --dearmor > /usr/share/keyrings/GPG-PUB-KEY-INTEL-OPENVINO-$OPENVINO_YEAR.gpg\necho "deb [signed-by=/usr/share/keyrings/GPG-PUB-KEY-INTEL-OPENVINO-$OPENVINO_YEAR.gpg] https://apt.repos.intel.com/openvino/$OPENVINO_YEAR all main" | sudo tee /etc/apt/sources.list.d/intel-openvino-$OPENVINO_YEAR.list\nsudo apt update\nsudo apt install -y intel-openvino-runtime-ubuntu20-$OPENVINO_VERSION\nsource /opt/intel/openvino_2021/bin/setupvars.sh\nldconfig\n')),(0,a.kt)("p",null,"Then build and install WasmEdge from source:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cd <path/to/your/wasmedge/source/folder>\nmkdir -p build && cd build\ncmake -DCMAKE_BUILD_TYPE=Release -DWASMEDGE_PLUGIN_WASI_NN_BACKEND="OpenVINO" .. && make -j\n# For the WASI-NN plugin, you should install this project.\ncmake --install .\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the built ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge")," CLI tool cannot find the WASI-NN plug-in, you can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"WASMEDGE_PLUGIN_PATH")," environment variable to the plug-in installation path (",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/"),", or the built plug-in path ",(0,a.kt)("inlineCode",{parentName:"p"},"build/plugins/wasi_nn/"),") to try to fix this issue.")),(0,a.kt)("p",null,"Then you will have an executable ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge")," runtime under ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," and the WASI-NN with OpenVINO backend plug-in under ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/libwasmedgePluginWasiNN.so")," after installation."),(0,a.kt)("h2",{id:"build-wasmedge-with-wasi-nn-pytorch-backend"},"Build WasmEdge with WASI-NN PyTorch Backend"),(0,a.kt)("p",null,"For choosing and installing PyTorch on ",(0,a.kt)("inlineCode",{parentName:"p"},"Ubuntu 20.04")," for the backend, we recommend the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export PYTORCH_VERSION="1.8.2"\ncurl -s -L -O --remote-name-all https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-cxx11-abi-shared-with-deps-${PYTORCH_VERSION}%2Bcpu.zip\nunzip -q "libtorch-cxx11-abi-shared-with-deps-${PYTORCH_VERSION}%2Bcpu.zip"\nrm -f "libtorch-cxx11-abi-shared-with-deps-${PYTORCH_VERSION}%2Bcpu.zip"\nexport LD_LIBRARY_PATH=$(pwd)/libtorch/lib:${LD_LIBRARY_PATH}\nexport Torch_DIR=$(pwd)/libtorch\n')),(0,a.kt)("p",null,"For the legacy operating system such as ",(0,a.kt)("inlineCode",{parentName:"p"},"CentOS 7.6"),", please use the ",(0,a.kt)("inlineCode",{parentName:"p"},"pre-cxx11-abi")," version of ",(0,a.kt)("inlineCode",{parentName:"p"},"libtorch")," instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export PYTORCH_VERSION="1.8.2"\ncurl -s -L -O --remote-name-all https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-shared-with-deps-${PYTORCH_VERSION}%2Bcpu.zip\nunzip -q "libtorch-shared-with-deps-${PYTORCH_VERSION}%2Bcpu.zip"\nrm -f "libtorch-shared-with-deps-${PYTORCH_VERSION}%2Bcpu.zip"\nexport LD_LIBRARY_PATH=$(pwd)/libtorch/lib:${LD_LIBRARY_PATH}\nexport Torch_DIR=$(pwd)/libtorch\n')),(0,a.kt)("p",null,"The PyTorch library will be extracted in the current directory ",(0,a.kt)("inlineCode",{parentName:"p"},"./libtorch"),"."),(0,a.kt)("p",null,"Then build and install WasmEdge from source:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cd <path/to/your/wasmedge/source/folder>\nmkdir -p build && cd build\ncmake -DCMAKE_BUILD_TYPE=Release -DWASMEDGE_PLUGIN_WASI_NN_BACKEND="PyTorch" .. && make -j\n# For the WASI-NN plugin, you should install this project.\ncmake --install .\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the built ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge")," CLI tool cannot find the WASI-NN plug-in, you can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"WASMEDGE_PLUGIN_PATH")," environment variable to the plug-in installation path (",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/"),", or the built plug-in path ",(0,a.kt)("inlineCode",{parentName:"p"},"build/plugins/wasi_nn/"),") to try to fix this issue.")),(0,a.kt)("p",null,"Then you will have an executable ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge")," runtime under ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," and the WASI-NN with OpenVINO backend plug-in under ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/libwasmedgePluginWasiNN.so")," after installation."),(0,a.kt)("h2",{id:"build-wasmedge-with-wasi-nn-tensorflow-lite-backend"},"Build WasmEdge with WASI-NN TensorFlow-Lite Backend"),(0,a.kt)("p",null,"You can build and install WasmEdge from source directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cd <path/to/your/wasmedge/source/folder>\nmkdir -p build && cd build\ncmake -DCMAKE_BUILD_TYPE=Release -DWASMEDGE_PLUGIN_WASI_NN_BACKEND="TensorflowLite" .. && make -j\n# For the WASI-NN plugin, you should install this project.\ncmake --install .\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the built ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge")," CLI tool cannot find the WASI-NN plug-in, you can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"WASMEDGE_PLUGIN_PATH")," environment variable to the plug-in installation path (",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/"),", or the built plug-in path ",(0,a.kt)("inlineCode",{parentName:"p"},"build/plugins/wasi_nn/"),") to try to fix this issue.")),(0,a.kt)("p",null,"Then you will have an executable ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge")," runtime under ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," and the WASI-NN with OpenVINO backend plug-in under ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/libwasmedgePluginWasiNN.so")," after installation."),(0,a.kt)("p",null,"Installing the necessary ",(0,a.kt)("inlineCode",{parentName:"p"},"libtensorflowlite_c.so")," on both ",(0,a.kt)("inlineCode",{parentName:"p"},"Ubuntu 20.04")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"manylinux2014")," for the backend, we recommend the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s -L -O --remote-name-all https://github.com/second-state/WasmEdge-tensorflow-deps/releases/download/{{ wasmedge_version }}/WasmEdge-tensorflow-deps-TFLite-{{ wasmedge_version }}-manylinux2014_x86_64.tar.gz\ntar -zxf WasmEdge-tensorflow-deps-TFLite-{{ wasmedge_version }}-manylinux2014_x86_64.tar.gz\nrm -f WasmEdge-tensorflow-deps-TFLite-{{ wasmedge_version }}-manylinux2014_x86_64.tar.gz\n")),(0,a.kt)("p",null,"The shared library will be extracted in the current directory ",(0,a.kt)("inlineCode",{parentName:"p"},"./libtensorflowlite_c.so"),"."),(0,a.kt)("p",null,"Then you can move the library to the installation path:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mv libtensorflowlite_c.so /usr/local/lib\n")),(0,a.kt)("p",null,"Or set the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"export LD_LIBRARY_PATH=$(pwd):${LD_LIBRARY_PATH}"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We also provided the ",(0,a.kt)("inlineCode",{parentName:"p"},"MacOS")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"manylinux_aarch64")," version of the TensorFlow-Lite pre-built shared library.")))}d.isMDXComponent=!0}}]);