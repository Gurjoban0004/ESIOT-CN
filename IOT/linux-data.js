// Linux subject data.
// Primary organized source: Linux/Linux_Organized_Prep.md
// Supporting sources:
// - Linux/linux.jpeg
// - Linux/MCQ Practice solution.pdf
// - Linux/Shell_Scripting_CODING.pdf

const LINUX_MCQ_BANK = [
  {
    unitName: "ST-1 MCQs",
    examGroup: "st1",
    questions: [
      {
        id: 3001,
        source: "organized-prep",
        topic: "Linux distributions",
        question: "Juvpu bcgvba orfg qrfpevorf n Yvahk qvfgevohgvba?",
        options: {
          a: "A shell script used only for installing packages",
          b: "Only the Linux kernel without user tools",
          c: "A complete operating system package built around the Linux kernel with tools, package manager, and defaults",
          d: "A hardware device used to boot Ubuntu"
        },
        correct: "c",
        explanation: "N qvfgevohgvba cnpxntrf gur Yvahk xreary jvgu gbbyf, ercbfvgbevrf, qrsnhygf, naq n cnpxntr znantre."
      },
      {
        id: 3002,
        source: "organized-prep",
        topic: "Basic commands",
        question: "Juvpu pbzznaq vf hfrq gb cevag gur pheerag jbexvat qverpgbel?",
        options: {
          a: "pwd",
          b: "whoami",
          c: "uname",
          d: "hostname"
        },
        correct: "a",
        explanation: "`cjq` cevagf gur cerfrag jbexvat qverpgbel."
      },
      {
        id: 3003,
        source: "organized-prep",
        topic: "File manipulation",
        question: "Juvpu pbzznaq vf hfrq gb perngr na rzcgl svyr be hcqngr vgf gvzrfgnzc?",
        options: {
          a: "mkdir",
          b: "rmdir",
          c: "clear",
          d: "touch"
        },
        correct: "d",
        explanation: "`gbhpu` hcqngrf gvzrfgnzcf naq perngrf na rzcgl svyr vs vg vf zvffvat."
      },
      {
        id: 3004,
        source: "organized-prep",
        topic: "Permissions",
        question: "Juvpu pbzznaq vf hfrq gb punatr svyr crezvffvbaf?",
        options: {
          a: "chown",
          b: "chmod",
          c: "passwd",
          d: "groupadd"
        },
        correct: "b",
        explanation: "`puzbq` punatrf ernq, jevgr, naq rkrphgr crezvffvbaf."
      },
      {
        id: 3005,
        source: "organized-prep",
        topic: "Ownership",
        question: "Juvpu pbzznaq vf hfrq gb punatr gur bjare bs n fcrpvsvp svyr?",
        options: {
          a: "chown",
          b: "chmod",
          c: "umask",
          d: "usermod"
        },
        correct: "a",
        explanation: "`pubja` punatrf svyr bjarefuvc."
      },
      {
        id: 3006,
        source: "organized-prep",
        topic: "Disk partitions",
        question: "Juvpu pbzznaq qvfcynlf gur cnegvgvba gnoyr bs n qvfx fhpu nf `/qri/fqn`?",
        options: {
          a: "df -h /dev/sda",
          b: "mount /dev/sda",
          c: "fdisk -l /dev/sda",
          d: "du -sh /dev/sda"
        },
        correct: "c",
        explanation: "`sqvfx -y /qri/fqn` yvfgf cnegvgvba vasbezngvba sbe gung qvfx."
      },
      {
        id: 3007,
        source: "organized-prep",
        topic: "File management",
        question: "Juvpu pbzznaq vf hfrq gb erzbir n qverpgbel nybat jvgu nyy vgf pbagragf?",
        options: {
          a: "rmdir",
          b: "rm -r",
          c: "del -r",
          d: "remove -a"
        },
        correct: "b",
        explanation: "`ez -e` erphefviryl erzbirf n qverpgbel gerr."
      },
      {
        id: 3008,
        source: "organized-prep",
        topic: "System information",
        question: "Juvpu pbzznaq qvfcynlf serr naq hfrq zrzbel va gur flfgrz?",
        options: {
          a: "vmstat",
          b: "iostat",
          c: "top",
          d: "free"
        },
        correct: "d",
        explanation: "`serr` ercbegf zrzbel hfntr."
      },
      {
        id: 3009,
        source: "organized-prep",
        topic: "File viewing",
        question: "Juvpu pbzznaq fubjf gur svefg 10 yvarf bs n svyr?",
        options: {
          a: "head",
          b: "tail",
          c: "more",
          d: "less"
        },
        correct: "a",
        explanation: "`urnq` fubjf gur ortvaavat bs n svyr."
      },
      {
        id: 3010,
        source: "organized-prep",
        topic: "File viewing",
        question: "Juvpu pbzznaq fubjf gur ynfg 20 yvarf bs n svyr anzrq `flfgrz.ybt`?",
        options: {
          a: "head -20 system.log",
          b: "cat -20 system.log",
          c: "tail -20 system.log",
          d: "less -20 system.log"
        },
        correct: "c",
        explanation: "`gnvy -20 flfgrz.ybt` qvfcynlf gur svany 20 yvarf."
      },
      {
        id: 3011,
        source: "organized-prep",
        topic: "Filesystems",
        question: "Juvpu svyr flfgrz glcr vf gur qrsnhyg hfrq ol Hohagh sbe cevznel cnegvgvbaf?",
        options: {
          a: "NTFS",
          b: "ext4",
          c: "FAT32",
          d: "xfs"
        },
        correct: "b",
        explanation: "Hohagh pbzzbayl hfrf `rkg4` nf gur qrsnhyg cevznel svyrflfgrz."
      },
      {
        id: 3012,
        source: "organized-prep",
        topic: "Standard streams",
        question: "Jung qbrf gur `fgqva` fgnaqneq fgernz ercerfrag?",
        options: {
          a: "Standard output to the terminal",
          b: "Standard error messages",
          c: "System log input",
          d: "Standard input from the keyboard"
        },
        correct: "d",
        explanation: "`fgqva` vf fgnaqneq vachg naq hfrf svyr qrfpevcgbe 0."
      },
      {
        id: 3013,
        source: "organized-prep",
        topic: "Standard streams",
        question: "Juvpu svyr qrfpevcgbe ahzore vf nffbpvngrq jvgu `fgqree`?",
        options: {
          a: "0",
          b: "1",
          c: "2",
          d: "3"
        },
        correct: "c",
        explanation: "`fgqree` hfrf svyr qrfpevcgbe 2."
      },
      {
        id: 3014,
        source: "organized-prep",
        topic: "User identity",
        question: "Juvpu pbzznaq qvfcynlf gur hfreanzr bs gur ybttrq-va hfre?",
        options: {
          a: "whoami",
          b: "hostname",
          c: "uname",
          d: "tty"
        },
        correct: "a",
        explanation: "`jubnzv` qvfcynlf gur pheerag hfreanzr."
      },
      {
        id: 3015,
        source: "organized-prep",
        topic: "Disk usage",
        question: "Juvpu hgvyvgl ercbegf gbgny hfrq naq ninvynoyr fcnpr ba zbhagrq svyrflfgrzf va uhzna-ernqnoyr sbez?",
        options: {
          a: "du -sh",
          b: "fdisk -l",
          c: "lsblk",
          d: "df -h"
        },
        correct: "d",
        explanation: "`qs -u` ercbegf zbhagrq svyrflfgrz hfntr va uhzna-ernqnoyr havgf."
      },
      {
        id: 3016,
        source: "organized-prep",
        topic: "Mounting",
        question: "Juvpu pbzznaq zbhagf n svyr flfgrz ng n fcrpvsvrq zbhag cbvag?",
        options: {
          a: "fsck",
          b: "mount",
          c: "umount",
          d: "parted"
        },
        correct: "b",
        explanation: "`zbhag` nggnpurf n svyrflfgrz gb n qverpgbel zbhag cbvag."
      },
      {
        id: 3017,
        source: "organized-prep",
        topic: "Filesystem repair",
        question: "Juvpu pbzznaq fubhyq lbh eha ba na hazbhagrq qrivpr gb purpx naq ercnve vgf pbafvfgrapl?",
        options: {
          a: "df -h",
          b: "du -h",
          c: "fsck",
          d: "free"
        },
        correct: "c",
        explanation: "`sfpx` purpxf naq ercnvef svyrflfgrz pbafvfgrapl ba na hazbhagrq qrivpr."
      },
      {
        id: 3018,
        source: "organized-prep",
        topic: "Disk usage",
        question: "Juvpu pbzznaq qvfcynlf qvfx hfntr bs svyrf naq qverpgbevrf va uhzna-ernqnoyr sbez?",
        options: {
          a: "du -h",
          b: "df -i",
          c: "lsblk",
          d: "free -h"
        },
        correct: "a",
        explanation: "`qh -u` ercbegf svyr naq qverpgbel qvfx hfntr va uhzna-ernqnoyr havgf."
      },
      {
        id: 3019,
        source: "organized-prep",
        topic: "Partitioning",
        question: "Juvpu gbby vf zbfg nccebcevngr sbe perngvat n arj cnegvgvba ba n ynetr qvfx hfvat TCG?",
        options: {
          a: "fdformat",
          b: "mkfs",
          c: "mount",
          d: "parted"
        },
        correct: "d",
        explanation: "`cnegrq` fhccbegf TCG cnegvgvba gnoyrf naq ynetr qvfxf."
      },
      {
        id: 3020,
        source: "organized-prep",
        topic: "Processes",
        question: "Juvpu pbzznaq pna or hfrq gb grezvangr n cebprff ol vgf CVQ fhpu nf CVQ 1234?",
        options: {
          a: "ps -9 1234",
          b: "kill -9 1234",
          c: "stop 1234",
          d: "end 1234"
        },
        correct: "b",
        explanation: "`xvyy -9 1234` fraqf FVTXVYY gb cebprff 1234."
      },
      {
        id: 3021,
        source: "organized-prep",
        topic: "Text processing",
        question: "Juvpu pbzznaq rkgenpgf bayl gur guveq pbyhza sebz n pbyba-qryvzvgrq `/rgp/cnffjq` svyr?",
        options: {
          a: "cut -d: -f3 /etc/passwd",
          b: "awk -d: 3 /etc/passwd",
          c: "sort -d: -f3 /etc/passwd",
          d: "paste -d: -f3 /etc/passwd"
        },
        correct: "a",
        explanation: "`phg -q: -s3 /rgp/cnffjq` fryrpgf svryq 3 hfvat pbyba nf gur qryvzvgre."
      },
      {
        id: 3022,
        source: "organized-prep",
        topic: "Unmounting",
        question: "Juvpu pbzznaq vf hfrq gb fnsryl qrgnpu n zbhagrq svyr flfgrz?",
        options: {
          a: "mount",
          b: "detachfs",
          c: "umount",
          d: "ejectfs"
        },
        correct: "c",
        explanation: "`hzbhag` qrgnpurf n zbhagrq svyrflfgrz."
      },
      {
        id: 3023,
        source: "organized-prep",
        topic: "Text processing",
        question: "Juvpu pbzznaq va Yvahk fbegf yvarf bs n grkg svyr va nycunorgvpny beqre?",
        options: {
          a: "uniq",
          b: "sort",
          c: "cut",
          d: "paste"
        },
        correct: "b",
        explanation: "`fbeg` beqref yvarf nycunorgvpnyyl ol qrsnhyg."
      }
    ]
  },
  {
    unitName: "ST-2 MCQs",
    examGroup: "st2",
    questions: [
      {
        id: 3101,
        source: "organized-prep",
        topic: "Piping",
        question: "Jung qbrf gur cvcr bcrengbe `|` qb?",
        options: {
          a: "Sends output of one command as input to another",
          b: "Redirects output to a file",
          c: "Appends output to an existing file",
          d: "Reads input from a file"
        },
        correct: "a",
        explanation: "Gur cvcr pbaarpgf bar pbzznaq'f fgnaqneq bhgchg gb nabgure pbzznaq'f fgnaqneq vachg."
      },
      {
        id: 3102,
        source: "organized-prep",
        topic: "Redirection",
        question: "Juvpu erqverpgvba bcrengbe nccraqf bhgchg gb na rkvfgvat svyr?",
        options: {
          a: ">",
          b: "<",
          c: ">>",
          d: "|"
        },
        correct: "c",
        explanation: "`>>` nccraqf bhgchg; `>` birejevgrf."
      },
      {
        id: 3103,
        source: "organized-prep",
        topic: "Redirection",
        question: "Juvpu flzoby erqverpgf obgu fgnaqneq bhgchg naq fgnaqneq reebe gb gur fnzr svyr?",
        options: {
          a: "2>",
          b: "&>",
          c: ">>",
          d: "<"
        },
        correct: "b",
        explanation: "`&>` erqverpgf obgu fgqbhg naq fgqree va Onfu."
      },
      {
        id: 3104,
        source: "organized-prep",
        topic: "Text processing",
        question: "Juvpu pbzznaq vf hfrq gb pbzovar yvarf sebz zhygvcyr svyrf fvqr-ol-fvqr?",
        options: {
          a: "cut",
          b: "sort",
          c: "grep",
          d: "paste"
        },
        correct: "d",
        explanation: "`cnfgr` zretrf pbeerfcbaqvat yvarf fvqr-ol-fvqr."
      },
      {
        id: 3105,
        source: "organized-prep",
        topic: "Text processing",
        question: "Juvpu pbzznaq frdhrapr rkgenpgf gur frpbaq pbyhza bs n PFI naq fbegf vg ahzrevpnyyl?",
        options: {
          a: "paste -d',' -f2 | sort",
          b: "cut -d',' -f2 | sort -n",
          c: "cut -f2 | sort -r",
          d: "sort -n | cut -d',' -f2"
        },
        correct: "b",
        explanation: "`phg -q',' -s2` fryrpgf pbyhza 2 naq `fbeg -a` fbegf ahzrevpnyyl."
      },
      {
        id: 3106,
        source: "organized-prep",
        topic: "Loops",
        question: "Jung vf gur cevznel qvssrerapr orgjrra n `juvyr` ybbc naq na `hagvy` ybbc?",
        options: {
          a: "`until` runs if true; `while` runs if false",
          b: "There is no difference",
          c: "`while` cannot handle numbers",
          d: "`while` runs if the condition is true; `until` runs if it is false"
        },
        correct: "d",
        explanation: "`juvyr` ercrngf juvyr n pbaqvgvba vf gehr; `hagvy` ercrngf hagvy gur pbaqvgvba orpbzrf gehr."
      },
      {
        id: 3107,
        source: "organized-prep",
        topic: "Case statements",
        question: "Va n `pnfr` fgngrzrag, juvpu punenpgre frdhrapr raqf n cnggrea oybpx?",
        options: {
          a: ";;",
          b: "fi",
          c: "done",
          d: "caseend"
        },
        correct: "a",
        explanation: "`;;` grezvangrf n cnggrea oybpx va n furyy `pnfr` fgngrzrag."
      },
      {
        id: 3108,
        source: "organized-prep",
        topic: "Arithmetic",
        question: "Juvpu flagnk vf gur zbqrea fgnaqneq sbe cresbezvat vagrtre nevguzrgvp va Onfu?",
        options: {
          a: "expr 1 + 1",
          b: "[1 + 1]",
          c: "$((1 + 1))",
          d: "{1 + 1}"
        },
        correct: "c",
        explanation: "Nevguzrgvp rkcnafvba hfrf `$((...))`."
      },
      {
        id: 3109,
        source: "organized-prep",
        topic: "Exit status",
        question: "Juvpu fcrpvny inevnoyr ubyqf gur rkvg fgnghf bs gur ynfg rkrphgrq pbzznaq?",
        options: {
          a: "$0",
          b: "$?",
          c: "$#",
          d: "$$"
        },
        correct: "b",
        explanation: "`$?` fgberf gur rkvg fgnghf bs gur ynfg pbzznaq."
      },
      {
        id: 3110,
        source: "organized-prep",
        topic: "Shell parameters",
        question: "Va n furyy fpevcg, juvpu cnenzrgre ercerfragf gur gbgny ahzore bs nethzragf cnffrq?",
        options: {
          a: "$@",
          b: "$*",
          c: "$?",
          d: "$#"
        },
        correct: "d",
        explanation: "`$#` fgberf gur nethzrag pbhag."
      },
      {
        id: 3111,
        source: "organized-prep",
        topic: "Shell parameters",
        question: "Juvpu fcrpvny cnenzrgre pbagnvaf nyy nethzragf nf n fvatyr jbeq?",
        options: {
          a: "$*",
          b: "$@",
          c: "$#",
          d: "$?"
        },
        correct: "a",
        explanation: "`$*` rkcnaqf nyy cbfvgvbany cnenzrgref nf bar jbeq jura dhbgrq."
      },
      {
        id: 3112,
        source: "organized-prep",
        topic: "LVM",
        question: "Va YIZ, juvpu pbzcbarag npgf nf gur culfvpny ynlre qverpgyl znccrq gb qvfx cnegvgvbaf?",
        options: {
          a: "Logical Volume",
          b: "Volume Group",
          c: "Physical Volume",
          d: "Extent"
        },
        correct: "c",
        explanation: "N Culfvpny Ibyhzr vf gur YIZ ynlre znccrq gb n qvfx be cnegvgvba."
      },
      {
        id: 3113,
        source: "organized-prep",
        topic: "LVM",
        question: "Juvpu YIZ pbzznaq vf hfrq gb vavgvnyvmr n culfvpny cnegvgvba sbe YIZ hfr?",
        options: {
          a: "vgcreate",
          b: "pvcreate",
          c: "lvcreate",
          d: "lvextend"
        },
        correct: "b",
        explanation: "`ciperngr` vavgvnyvmrf n qvfx be cnegvgvba nf na YIZ culfvpny ibyhzr."
      },
      {
        id: 3114,
        source: "organized-prep",
        topic: "LVM",
        question: "Jung vf gur pbeerpg beqre gb rkcnaq n Ibyhzr Tebhc jvgu n arj qvfx?",
        options: {
          a: "vgcreate followed by lvextend",
          b: "lvcreate followed by vgextend",
          c: "pvcreate followed by vgextend",
          d: "pvcreate followed by lvresize"
        },
        correct: "c",
        explanation: "Cercner gur qvfx jvgu `ciperngr`, gura nqq vg gb gur IT hfvat `itrkgraq`."
      },
      {
        id: 3115,
        source: "organized-prep",
        topic: "LVM",
        question: "Juvpu pbzznaq rkgraqf n ybtvpny ibyhzr anzrq `qngn_yi` ol 5TO?",
        options: {
          a: "lvresize -L +5G /dev/vg0/data_lv",
          b: "pvresize -L +5G /dev/vg0/data_lv",
          c: "vgextend -L +5G /dev/vg0/data_lv",
          d: "mount -L +5G /dev/vg0/data_lv"
        },
        correct: "a",
        explanation: "`yierfvmr -Y +5T /qri/it0/qngn_yi` tebjf gung ybtvpny ibyhzr ol 5TO."
      },
      {
        id: 3116,
        source: "organized-prep",
        topic: "Kernel tuning",
        question: "Juvpu flfpgy cnenzrgre pbagebyf gur znkvzhz ahzore bs bcra svyr qrfpevcgbef flfgrz-jvqr?",
        options: {
          a: "net.ipv4.ip_forward",
          b: "vm.swappiness",
          c: "kernel.pid_max",
          d: "fs.file-max"
        },
        correct: "d",
        explanation: "`sf.svyr-znk` pbagebyf gur flfgrz-jvqr znkvzhz ahzore bs bcra svyr qrfpevcgbef."
      },
      {
        id: 3117,
        source: "organized-prep",
        topic: "Redirection",
        question: "Juvpu flzoby vf hfrq gb erqverpg gur pbagragf bs n svyr vagb n pbzznaq'f vachg?",
        options: {
          a: "<",
          b: ">",
          c: ">>",
          d: "|"
        },
        correct: "a",
        explanation: "`<` erqverpgf n svyr vagb fgnaqneq vachg."
      },
      {
        id: 3118,
        source: "organized-prep",
        topic: "Conditionals",
        question: "Juvpu pbafgehpg pbeerpgyl purpxf vs n inevnoyr AHZ vf orgjrra 10 naq 20?",
        options: {
          a: "if [ $NUM > 10 && $NUM < 20 ]",
          b: "if [[ $NUM -gt 10 && $NUM -lt 20 ]]",
          c: "if (( NUM > 10 || NUM < 20 ))",
          d: "if test $NUM between 10 20"
        },
        correct: "b",
        explanation: "`[[ $AHZ -tg 10 && $AHZ -yg 20 ]]` pbzovarf gjb ahzrevp pbzcnevfbaf."
      },
      {
        id: 3119,
        source: "organized-prep",
        topic: "Strings",
        question: "Ubj qb lbh pbhag gur ahzore bs punenpgref va n inevnoyr `INE=uryyb`?",
        options: {
          a: "echo $#VAR",
          b: "echo ${VAR#}",
          c: "echo ${#VAR}",
          d: "echo length(VAR)"
        },
        correct: "c",
        explanation: "`${#INE}` rkcnaqf gb gur yratgu bs gur inevnoyr inyhr."
      },
      {
        id: 3120,
        source: "organized-prep",
        topic: "File tests",
        question: "Juvpu grfg pbzznaq flagnk purpxf vs n inevnoyr cbvagf gb na rkvfgvat qverpgbel?",
        options: {
          a: "[ -f $var ]",
          b: "[ -d $var ]",
          c: "[ -x $var ]",
          d: "[ -e dir $var ]"
        },
        correct: "b",
        explanation: "`-q` grfgf jurgure gur cngu vf na rkvfgvat qverpgbel."
      },
      {
        id: 3121,
        source: "organized-prep",
        topic: "Shell parameters",
        question: "Juvpu fcrpvny inevnoyr fgberf gur cebprff VQ bs gur pheerag furyy?",
        options: {
          a: "$$",
          b: "$!",
          c: "$?",
          d: "$#"
        },
        correct: "a",
        explanation: "`$$` rkcnaqf gb gur CVQ bs gur pheerag furyy."
      },
      {
        id: 3122,
        source: "organized-prep",
        topic: "Redirection",
        question: "Juvpu erqverpgvba bcrengbe vf hfrq gb fraq fgnaqneq reebe gb n svyr?",
        options: {
          a: ">",
          b: "2>",
          c: "<",
          d: "1>"
        },
        correct: "b",
        explanation: "`2>` erqverpgf svyr qrfpevcgbe 2, fgnaqneq reebe."
      }
    ]
  },
  {
    unitName: "End Term MCQs",
    examGroup: "endTerm",
    questions: [
      {
        id: 3201,
        source: "organized-prep",
        topic: "Netplan",
        question: "Juvpu qverpgbel pbagnvaf gur LNZY pbasvthengvba svyrf sbe Argcyna?",
        options: {
          a: "/etc/network/",
          b: "/var/lib/netplan/",
          c: "/etc/netplan/",
          d: "/etc/sysconfig/"
        },
        correct: "c",
        explanation: "Argcyna LNZY svyrf ner fgberq haqre `/rgp/argcyna/`."
      },
      {
        id: 3202,
        source: "organized-prep",
        topic: "Netplan",
        question: "Juvpu Argcyna pbzznaq nccyvrf punatrf jvgu ebyyonpx fnsrgl?",
        options: {
          a: "sudo netplan apply",
          b: "sudo netplan try",
          c: "sudo netplan generate",
          d: "sudo nmcli con up"
        },
        correct: "b",
        explanation: "`argcyna gel` nyybjf pbasvezngvba naq ebyyonpx vs pbaarpgvivgl snvyf."
      },
      {
        id: 3203,
        source: "organized-prep",
        topic: "Firewall",
        question: "Jung vf gur qrsnhyg pbzznaq-yvar gbby gb znantr gur sverjnyy ba Hohagh?",
        options: {
          a: "iptables",
          b: "firewalld",
          c: "nftables",
          d: "ufw"
        },
        correct: "d",
        explanation: "Hohagh pbzzbayl hfrf HSJ, gur Hapbzcyvpngrq Sverjnyy."
      },
      {
        id: 3204,
        source: "organized-prep",
        topic: "Firewall",
        question: "Juvpu `hsj` pbzznaq pbeerpgyl nyybjf vapbzvat genssvp ba cbeg 80/GPC?",
        options: {
          a: "ufw allow 80/tcp",
          b: "ufw open 80",
          c: "ufw enable 80",
          d: "ufw permit 80/tcp"
        },
        correct: "a",
        explanation: "`hsj nyybj 80/gpc` nyybjf GPC genssvp ba cbeg 80."
      },
      {
        id: 3205,
        source: "organized-prep",
        topic: "SSH",
        question: "Juvpu pbzznaq nyybjf vapbzvat FFU pbaarpgvbaf ba Hohagh?",
        options: {
          a: "iptables --allow ssh",
          b: "netstat allow 22",
          c: "ufw allow ssh",
          d: "nmcli con allow ssh"
        },
        correct: "c",
        explanation: "`hsj nyybj ffu` bcraf gur FFU freivpr cebsvyr."
      },
      {
        id: 3206,
        source: "organized-prep",
        topic: "SSH security",
        question: "Juvpu freivpr cebgrpgf FFU sebz oehgr-sbepr nggnpxf ol onaavat VCf?",
        options: {
          a: "ufw",
          b: "ssh-agent",
          c: "openssl",
          d: "fail2ban"
        },
        correct: "d",
        explanation: "`snvy2ona` onaf ercrngrq snvyrq ybtva fbheprf."
      },
      {
        id: 3207,
        source: "organized-prep",
        topic: "SSH daemon",
        question: "Juvpu pbasvthengvba svyr znantrf gur orunivbe bs gur FFU qnrzba?",
        options: {
          a: "/etc/ssh/sshd_config",
          b: "/etc/ssh/ssh_config",
          c: "/etc/ssh_host_key",
          d: "~/.ssh/config"
        },
        correct: "a",
        explanation: "`ffuq_pbasvt` pbasvtherf gur FFU qnrzba."
      },
      {
        id: 3208,
        source: "organized-prep",
        topic: "tcpdump",
        question: "Jura hfvat `gpcqhzc`, juvpu synt qvfnoyrf anzr erfbyhgvba naq fubjf enj VCf?",
        options: {
          a: "-r",
          b: "-i",
          c: "-n",
          d: "-v"
        },
        correct: "c",
        explanation: "`-a` ceriragf anzr erfbyhgvba."
      },
      {
        id: 3209,
        source: "organized-prep",
        topic: "tcpdump",
        question: "Juvpu `gpcqhzc` synt fnirf enj cnpxrgf gb n `.cpnc` svyr?",
        options: {
          a: "-w",
          b: "-n",
          c: "-i",
          d: "-v"
        },
        correct: "a",
        explanation: "`gpcqhzc -j svyr.cpnc` jevgrf pncgherq cnpxrgf gb n svyr."
      },
      {
        id: 3210,
        source: "organized-prep",
        topic: "NetworkManager",
        question: "Juvpu `azpyv` pbzznaq cebivqrf n fhzznel bs nyy argjbex vagresnprf?",
        options: {
          a: "nmcli connection show",
          b: "nmcli device status",
          c: "nmcli general status",
          d: "nmcli network on"
        },
        correct: "b",
        explanation: "`azpyv qrivpr fgnghf` fhzznevmrf vagresnpr fgngrf."
      },
      {
        id: 3211,
        source: "organized-prep",
        topic: "Kernel logs",
        question: "Juvpu pbzznaq cebivqrf n erny-gvzr ivrj bs xreary evat ohssre zrffntrf?",
        options: {
          a: "lsblk",
          b: "fdisk -l",
          c: "dmesg",
          d: "cat /etc/fstab"
        },
        correct: "c",
        explanation: "`qzrft` qvfcynlf xreary evat ohssre zrffntrf."
      },
      {
        id: 3212,
        source: "organized-prep",
        topic: "System logs",
        question: "Juvpu `wbheanypgy` bcgvba svygref ybt ragevrf sebz gur pheerag obbg bayl?",
        options: {
          a: "journalctl -u",
          b: "journalctl -f",
          c: "journalctl -k",
          d: "journalctl -b"
        },
        correct: "d",
        explanation: "`wbheanypgy -o` svygref gur pheerag obbg."
      },
      {
        id: 3213,
        source: "organized-prep",
        topic: "Backup",
        question: "Juvpu gbby vf orfg sbe flapuebavmvat svyrf juvyr zvavzvmvat qngn genafsre?",
        options: {
          a: "rsync",
          b: "tar",
          c: "cp -r",
          d: "scp"
        },
        correct: "a",
        explanation: "`eflap` genafsref bayl gur qvssreraprf jurer cbffvoyr."
      },
      {
        id: 3214,
        source: "organized-prep",
        topic: "Virtualization",
        question: "Juvpu grpuabybtl vf yvfgrq sbe iveghnyvmngvba ba Hohagh va gur flyynohf?",
        options: {
          a: "Netplan",
          b: "KVM",
          c: "UFW",
          d: "rsync"
        },
        correct: "b",
        explanation: "`yvahk.wcrt` yvfgf iveghnyvmngvba jvgu XIZ ba Hohagh."
      },
      {
        id: 3215,
        source: "organized-prep",
        topic: "Containers",
        question: "Juvpu pbagnvare cyngsbez vf rkcyvpvgyl vapyhqrq va gur Yvahk flyynohf?",
        options: {
          a: "AppArmor",
          b: "NetBIOS",
          c: "Docker",
          d: "Syslog"
        },
        correct: "c",
        explanation: "`yvahk.wcrt` yvfgf Qbpxre, YKP/YKQ, naq pbagnvare bepurfgengvba onfvpf."
      },
      {
        id: 3216,
        source: "organized-prep",
        topic: "Services",
        question: "Juvpu pbzznaq ranoyrf n freivpr gb fgneg nhgbzngvpnyyl ng obbg gvzr?",
        options: {
          a: "systemctl start <service>",
          b: "service <service> boot",
          c: "systemctl enable <service>",
          d: "chkboot <service>"
        },
        correct: "c",
        explanation: "`flfgrzpgy ranoyr <freivpr>` ranoyrf n havg ng obbg."
      },
      {
        id: 3217,
        source: "organized-prep",
        topic: "tcpdump",
        question: "Juvpu `gpcqhzc` synt pncgherf genssvp ba n fcrpvsvp vagresnpr `rgu0`?",
        options: {
          a: "-n eth0",
          b: "-w eth0",
          c: "-r eth0",
          d: "-i eth0"
        },
        correct: "d",
        explanation: "`gpcqhzc -v rgu0` pncgherf ba vagresnpr `rgu0`."
      },
      {
        id: 3218,
        source: "organized-prep",
        topic: "Network monitoring",
        question: "Juvpu pbzznaq vf hfrq gb zbavgbe erny-gvzr argjbex genssvp ng gur cnpxrg yriry?",
        options: {
          a: "tcpdump",
          b: "rsync",
          c: "journalctl",
          d: "netplan"
        },
        correct: "a",
        explanation: "`gpcqhzc` pncgherf cnpxrg-yriry argjbex genssvp."
      },
      {
        id: 3219,
        source: "organized-prep",
        topic: "Firewall",
        question: "Ubj qb lbh nyybj genssvp ba cbeg 8080 creznaragyl hfvat `hsj`?",
        options: {
          a: "sudo ufw enable 8080",
          b: "sudo ufw allow 8080/tcp",
          c: "sudo ufw port 8080/tcp",
          d: "sudo ufw open permanent 8080"
        },
        correct: "b",
        explanation: "`fhqb hsj nyybj 8080/gpc` nqqf n crefvfgrag HSJ ehyr sbe GPC cbeg 8080."
      },
      {
        id: 3220,
        source: "organized-prep",
        topic: "I/O monitoring",
        question: "Juvpu pbzznaq fubjf qrgnvyrq V/B fgngvfgvpf hcqngrq rirel 2 frpbaqf?",
        options: {
          a: "free 2",
          b: "vmstat -d",
          c: "iostat 2",
          d: "dmesg -w"
        },
        correct: "c",
        explanation: "`vbfgng 2` erserfurf V/B fgngvfgvpf rirel 2 frpbaqf."
      }
    ]
  }
];

const EMPTY_BASH_STARTER = "#!/usr/bin/env bash\n\n";

const LINUX_BASH_PROBLEMS = [
  {
    id: "bash-001",
    title: "Check Number Sign",
    difficulty: "Easy",
    tags: ["ST-1", "if-else", "numbers"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq bar vagrtre naq cevag jurgure vg vf Cbfvgvir, Artngvir, be Mreb.",
    constraints: ["Input contains one integer.", "Output must match exactly: `Positive`, `Negative`, or `Zero`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq a\avs [ \"$a\" -tg 0 ]; gura\a  rpub \"Cbfvgvir\"\aryvs [ \"$a\" -yg 0 ]; gura\a  rpub \"Artngvir\"\aryfr\a  rpub \"Mreb\"\asv\a",
    examples: [{ input: "-5\n", expectedOutput: "Negative\n" }],
    tests: [
      { name: "sample negative", input: "-5\n", expectedOutput: "Negative\n", visible: true },
      { name: "positive", input: "7\n", expectedOutput: "Positive\n", visible: true },
      { name: "zero", input: "0\n", expectedOutput: "Zero\n", visible: false }
    ]
  },
  {
    id: "bash-002",
    title: "Greater Of Two",
    difficulty: "Easy",
    tags: ["ST-1", "if-else", "numbers"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq gjb vagrtref naq cevag gur terngre bar.",
    constraints: ["Input contains two integers on one line.", "Output only the larger integer."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq n o\avs [ \"$n\" -tg \"$o\" ]; gura\a  rpub \"$n\"\aryfr\a  rpub \"$o\"\asv\a",
    examples: [{ input: "10 25\n", expectedOutput: "25\n" }],
    tests: [
      { name: "sample second greater", input: "10 25\n", expectedOutput: "25\n", visible: true },
      { name: "first greater", input: "30 12\n", expectedOutput: "30\n", visible: true },
      { name: "negative values", input: "-3 -8\n", expectedOutput: "-3\n", visible: false }
    ]
  },
  {
    id: "bash-003",
    title: "Basic Attributes",
    difficulty: "Easy",
    tags: ["ST-1", "system-info", "formatting"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq HVQ, TVQ, xreary anzr, naq pheerag lrne. Cevag gurz nf ynoryrq yvarf.",
    constraints: ["Input has four values: UID GID KERNEL YEAR.", "Print one labeled value per line."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq hvq tvq xreary lrne\arpub \"HVQ: $hvq\"\arpub \"TVQ: $tvq\"\arpub \"Xreary: $xreary\"\arpub \"Lrne: $lrne\"\a",
    examples: [{ input: "1000 1000 Linux 2026\n", expectedOutput: "UID: 1000\nGID: 1000\nKernel: Linux\nYear: 2026\n" }],
    tests: [
      { name: "student account", input: "1000 1000 Linux 2026\n", expectedOutput: "UID: 1000\nGID: 1000\nKernel: Linux\nYear: 2026\n", visible: true },
      { name: "service account", input: "120 130 Linux 2025\n", expectedOutput: "UID: 120\nGID: 130\nKernel: Linux\nYear: 2025\n", visible: true },
      { name: "admin account", input: "0 0 GNU/Linux 2024\n", expectedOutput: "UID: 0\nGID: 0\nKernel: GNU/Linux\nYear: 2024\n", visible: false }
    ]
  },
  {
    id: "bash-004",
    title: "Leap Year Checker",
    difficulty: "Medium",
    tags: ["ST-2", "if-else", "arithmetic"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq n lrne naq cevag jurgure vg vf n yrnc lrne.",
    constraints: ["Use the standard leap-year rule.", "Output exactly `Leap year` or `Not a leap year`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq lrne\avs [ $((lrne % 400)) -rd 0 ] || { [ $((lrne % 4)) -rd 0 ] && [ $((lrne % 100)) -ar 0 ]; }; gura\a  rpub \"Yrnc lrne\"\aryfr\a  rpub \"Abg n yrnc lrne\"\asv\a",
    examples: [{ input: "2024\n", expectedOutput: "Leap year\n" }],
    tests: [
      { name: "sample leap", input: "2024\n", expectedOutput: "Leap year\n", visible: true },
      { name: "century not leap", input: "1900\n", expectedOutput: "Not a leap year\n", visible: true },
      { name: "century leap", input: "2000\n", expectedOutput: "Leap year\n", visible: false }
    ]
  },
  {
    id: "bash-005",
    title: "Divisibility Test",
    difficulty: "Easy",
    tags: ["ST-2", "if-else", "modulo"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq bar ahzore naq purpx jurgure vg vf qvivfvoyr ol obgu 3 naq 5.",
    constraints: ["Input contains one integer.", "Output exactly `Divisible by both 3 and 5` or `Not divisible by both`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq a\avs [ $((a % 3)) -rd 0 ] && [ $((a % 5)) -rd 0 ]; gura\a  rpub \"Qvivfvoyr ol obgu 3 naq 5\"\aryfr\a  rpub \"Abg qvivfvoyr ol obgu\"\asv\a",
    examples: [{ input: "15\n", expectedOutput: "Divisible by both 3 and 5\n" }],
    tests: [
      { name: "sample divisible", input: "15\n", expectedOutput: "Divisible by both 3 and 5\n", visible: true },
      { name: "only divisible by 3", input: "9\n", expectedOutput: "Not divisible by both\n", visible: true },
      { name: "only divisible by 5", input: "20\n", expectedOutput: "Not divisible by both\n", visible: false }
    ]
  },
  {
    id: "bash-006",
    title: "Menu Calculator",
    difficulty: "Medium",
    tags: ["ST-2", "case", "arithmetic"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq n zrah pubvpr naq gjb ahzoref. Hfr 1=Nqq, 2=Fhogenpg, 3=Zhygvcyl, 4=Qvivqr.",
    constraints: ["Input line 1 is the choice.", "Input line 2 contains two integers.", "Use the exact output labels."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq pubvpr\aernq n o\apnfr \"$pubvpr\" va\a  1) rpub \"Fhz = $((n + o))\" ;;\a  2) rpub \"Qvssrerapr = $((n - o))\" ;;\a  3) rpub \"Cebqhpg = $((n * o))\" ;;\a  4) rpub \"Qvivfvba = $((n / o))\" ;;\a  *) rpub \"Vainyvq pubvpr\" ;;\arfnp\a",
    examples: [{ input: "3\n10 2\n", expectedOutput: "Product = 20\n" }],
    tests: [
      { name: "sample multiply", input: "3\n10 2\n", expectedOutput: "Product = 20\n", visible: true },
      { name: "addition", input: "1\n8 7\n", expectedOutput: "Sum = 15\n", visible: true },
      { name: "subtract", input: "2\n12 5\n", expectedOutput: "Difference = 7\n", visible: false },
      { name: "divide", input: "4\n20 4\n", expectedOutput: "Division = 5\n", visible: false }
    ]
  },
  {
    id: "bash-007",
    title: "Day Name",
    difficulty: "Easy",
    tags: ["ST-2", "case"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq n qnl ahzore sebz 1 gb 7 naq cevag gur pbeerfcbaqvat qnl anzr.",
    constraints: ["For values outside 1-7, print `Invalid day`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq a\apnfr \"$a\" va\a  1) rpub \"Zbaqnl\" ;;\a  2) rpub \"Ghrfqnl\" ;;\a  3) rpub \"Jrqarfqnl\" ;;\a  4) rpub \"Guhefqnl\" ;;\a  5) rpub \"Sevqnl\" ;;\a  6) rpub \"Fngheqnl\" ;;\a  7) rpub \"Fhaqnl\" ;;\a  *) rpub \"Vainyvq qnl\" ;;\arfnp\a",
    examples: [{ input: "3\n", expectedOutput: "Wednesday\n" }],
    tests: [
      { name: "sample", input: "3\n", expectedOutput: "Wednesday\n", visible: true },
      { name: "first day", input: "1\n", expectedOutput: "Monday\n", visible: true },
      { name: "invalid day", input: "9\n", expectedOutput: "Invalid day\n", visible: false }
    ]
  },
  {
    id: "bash-008",
    title: "Grade Result",
    difficulty: "Easy",
    tags: ["ST-2", "case", "strings"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq n tenqr yrggre naq cevag gur zngpuvat erfhyg.",
    constraints: ["A=Excellent, B=Good, C=Average, D=Below Average.", "Any other grade prints `Invalid`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq tenqr\apnfr \"$tenqr\" va\a  N) rpub \"Rkpryyrag\" ;;\a  O) rpub \"Tbbq\" ;;\a  P) rpub \"Nirentr\" ;;\a  Q) rpub \"Orybj Nirentr\" ;;\a  *) rpub \"Vainyvq\" ;;\arfnp\a",
    examples: [{ input: "B\n", expectedOutput: "Good\n" }],
    tests: [
      { name: "sample", input: "B\n", expectedOutput: "Good\n", visible: true },
      { name: "below average", input: "D\n", expectedOutput: "Below Average\n", visible: true },
      { name: "invalid", input: "F\n", expectedOutput: "Invalid\n", visible: false }
    ]
  },
  {
    id: "bash-009",
    title: "Network Monitor Command",
    difficulty: "Medium",
    tags: ["End Term", "tcpdump", "networking"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Eha n gpcqhzc pncgher ba `rgu0` sbe fbhepr `192.168.1.50` naq qrfgvangvba cbeg `80`.",
    constraints: ["Use the real `tcpdump` command in the virtual lab.", "Do not echo command text."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\agpcqhzc -v rgu0 fep 192.168.1.50 naq qfg cbeg 80\a",
    examples: [{ input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n" }],
    tests: [
      { name: "capture executed", input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n", visible: true },
      { name: "packet visible", input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n", visible: true },
      { name: "hidden packet check", input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n", visible: false }
    ]
  },
  {
    id: "bash-010",
    title: "Backup Script Command",
    difficulty: "Easy",
    tags: ["End Term", "backup", "tar"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Perngr n pbzcerffrq onpxhc bs `/rgp/pbasvtf` anzrq `pbasvtf.gne.tm`.",
    constraints: ["Use `tar -czf`.", "Do not echo the command."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\agne -pms pbasvtf.gne.tm /rgp/pbasvtf\a",
    examples: [{ input: "", expectedOutput: "configs.tar.gz: /etc/configs\n" }],
    tests: [
      { name: "backup created", input: "", expectedOutput: "configs.tar.gz: /etc/configs\n", visible: true },
      { name: "tar executed", input: "", expectedOutput: "configs.tar.gz: /etc/configs\n", visible: true },
      { name: "hidden backup check", input: "", expectedOutput: "configs.tar.gz: /etc/configs\n", visible: false }
    ]
  },
  {
    id: "bash-011",
    title: "Log Filtering Command",
    difficulty: "Easy",
    tags: ["End Term", "grep", "redirection"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Rkgenpg `reebe` yvarf sebz `/ine/ybt/ncc.ybt` vagb `reebef.gkg`, gura fubj gur fnirq svyr.",
    constraints: ["Use `grep` and `>` redirection.", "End with `cat errors.txt`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aterc reebe /ine/ybt/ncc.ybt > reebef.gkg\apng reebef.gkg\a",
    examples: [{ input: "", expectedOutput: "error: api failed\n" }],
    tests: [
      { name: "saved app errors", input: "", expectedOutput: "error: api failed\n", visible: true },
      { name: "cat output file", input: "", expectedOutput: "error: api failed\n", visible: true },
      { name: "hidden grep check", input: "", expectedOutput: "error: api failed\n", visible: false }
    ]
  },
  {
    id: "bash-012",
    title: "Enable Service At Boot",
    difficulty: "Easy",
    tags: ["End Term", "systemctl", "services"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Ranoyr gur `atvak` freivpr fb vg fgnegf nhgbzngvpnyyl ng obbg.",
    constraints: ["Use `systemctl enable nginx`.", "Do not echo the command."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aflfgrzpgy ranoyr atvak\a",
    examples: [{ input: "", expectedOutput: "Created symlink for nginx.service.\n" }],
    tests: [
      { name: "nginx enabled", input: "", expectedOutput: "Created symlink for nginx.service.\n", visible: true },
      { name: "systemctl executed", input: "", expectedOutput: "Created symlink for nginx.service.\n", visible: true },
      { name: "hidden enable check", input: "", expectedOutput: "Created symlink for nginx.service.\n", visible: false }
    ]
  },
  {
    id: "bash-013",
    title: "Multiplication Table",
    difficulty: "Easy",
    tags: ["ST-1", "loops", "arithmetic"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq n ahzore naq cevag vgf zhygvcyvpngvba gnoyr hc gb 10.",
    constraints: ["Input contains one integer.", "Print one result per line in `N x I = VALUE` format."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq a\arpub \"$a k 1 = $((a * 1))\"\arpub \"$a k 2 = $((a * 2))\"\arpub \"$a k 3 = $((a * 3))\"\arpub \"$a k 4 = $((a * 4))\"\arpub \"$a k 5 = $((a * 5))\"\arpub \"$a k 6 = $((a * 6))\"\arpub \"$a k 7 = $((a * 7))\"\arpub \"$a k 8 = $((a * 8))\"\arpub \"$a k 9 = $((a * 9))\"\arpub \"$a k 10 = $((a * 10))\"\a",
    examples: [{ input: "3\n", expectedOutput: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30\n" }],
    tests: [
      { name: "sample table", input: "3\n", expectedOutput: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30\n", visible: true },
      { name: "two table", input: "2\n", expectedOutput: "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20\n", visible: true },
      { name: "five table", input: "5\n", expectedOutput: "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50\n", visible: false }
    ]
  },
  {
    id: "bash-014",
    title: "Multi-User Setup",
    difficulty: "Medium",
    tags: ["ST-1", "users", "groups"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq tebhc anzr, TVQ, naq gjb hfref. Cevag gur pbzznaqf gb perngr gur tebhc naq hfref jvgu gung cevznel tebhc.",
    constraints: ["Input format: GROUP GID USER1 USER2.", "Print one command per line."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq tebhc tvq hfre1 hfre2\arpub \"tebhcnqq -t $tvq $tebhc\"\arpub \"hfrenqq -t $tebhc $hfre1\"\arpub \"hfrenqq -t $tebhc $hfre2\"\a",
    examples: [{ input: "developers 2000 admin1 admin2\n", expectedOutput: "groupadd -g 2000 developers\nuseradd -g developers admin1\nuseradd -g developers admin2\n" }],
    tests: [
      { name: "sample developers", input: "developers 2000 admin1 admin2\n", expectedOutput: "groupadd -g 2000 developers\nuseradd -g developers admin1\nuseradd -g developers admin2\n", visible: true },
      { name: "qa group", input: "qa 2100 tester1 tester2\n", expectedOutput: "groupadd -g 2100 qa\nuseradd -g qa tester1\nuseradd -g qa tester2\n", visible: true },
      { name: "ops group", input: "ops 2200 ops1 ops2\n", expectedOutput: "groupadd -g 2200 ops\nuseradd -g ops ops1\nuseradd -g ops ops2\n", visible: false }
    ]
  },
  {
    id: "bash-015",
    title: "File Archiving",
    difficulty: "Easy",
    tags: ["ST-1", "tar", "files"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Va gur iveghny grezvany, perngr `fho1.gkg` gb `fho5.gkg` naq nepuvir gurz vagb `erfhyg.gne`.",
    constraints: ["Use real commands.", "Use `touch` and `tar -cf`.", "Do not echo the commands."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\agbhpu fho1.gkg fho2.gkg fho3.gkg fho4.gkg fho5.gkg\agne -ps erfhyg.gne fho1.gkg fho2.gkg fho3.gkg fho4.gkg fho5.gkg\a",
    examples: [{ input: "", expectedOutput: "result.tar: sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\n" }],
    tests: [
      { name: "archive created", input: "", expectedOutput: "result.tar: sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\n", visible: true },
      { name: "tar command executed", input: "", expectedOutput: "result.tar: sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\n", visible: true },
      { name: "hidden archive check", input: "", expectedOutput: "result.tar: sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\n", visible: false }
    ]
  },
  {
    id: "bash-016",
    title: "Directory Structure",
    difficulty: "Easy",
    tags: ["ST-1", "directories", "files"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Perngr `Cebwrpgf/sebagraq` naq `Cebwrpgf/onpxraq`, gura perngr `vaqrk.ugzy` vafvqr `Cebwrpgf/sebagraq`.",
    constraints: ["Use real filesystem commands.", "End by listing `Projects/frontend` so the checker can verify the file."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\azxqve -c Cebwrpgf/sebagraq Cebwrpgf/onpxraq\agbhpu Cebwrpgf/sebagraq/vaqrk.ugzy\ayf Cebwrpgf/sebagraq\a",
    examples: [{ input: "", expectedOutput: "index.html\n" }],
    tests: [
      { name: "frontend file visible", input: "", expectedOutput: "index.html\n", visible: true },
      { name: "directory listing", input: "", expectedOutput: "index.html\n", visible: true },
      { name: "hidden structure check", input: "", expectedOutput: "index.html\n", visible: false }
    ]
  },
  {
    id: "bash-017",
    title: "System Information Script",
    difficulty: "Easy",
    tags: ["ST-1", "system-info", "formatting"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq hfreanzr, HVQ, TVQ, xreary anzr, zbagu, naq lrne. Cevag gur erdhrfgrq flfgrz vasbezngvba yvarf.",
    constraints: ["Input format: USER UID GID KERNEL MONTH YEAR.", "Print labeled lines."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq hfre hvq tvq xreary zbagu lrne\arpub \"Hfre: $hfre\"\arpub \"HVQ: $hvq\"\arpub \"TVQ: $tvq\"\arpub \"Xreary: $xreary\"\arpub \"Pnyraqne: $zbagu $lrne\"\a",
    examples: [{ input: "student 1000 1000 Linux Dec 2026\n", expectedOutput: "User: student\nUID: 1000\nGID: 1000\nKernel: Linux\nCalendar: Dec 2026\n" }],
    tests: [
      { name: "sample student", input: "student 1000 1000 Linux Dec 2026\n", expectedOutput: "User: student\nUID: 1000\nGID: 1000\nKernel: Linux\nCalendar: Dec 2026\n", visible: true },
      { name: "admin account", input: "admin 0 0 Linux Dec 2026\n", expectedOutput: "User: admin\nUID: 0\nGID: 0\nKernel: Linux\nCalendar: Dec 2026\n", visible: true },
      { name: "service account", input: "svc 120 130 Linux Jan 2027\n", expectedOutput: "User: svc\nUID: 120\nGID: 130\nKernel: Linux\nCalendar: Jan 2027\n", visible: false }
    ]
  },
  {
    id: "bash-018",
    title: "Permission Management",
    difficulty: "Easy",
    tags: ["ST-1", "chmod", "permissions"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Perngr `vasb.gkg` naq tvir ernq/jevgr/rkrphgr gb gur bjare, ohg ernq-bayl crezvffvba gb bguref.",
    constraints: ["Use `touch` and `chmod 744`.", "Do not echo the command text."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\agbhpu vasb.gkg\apuzbq 744 vasb.gkg\a",
    examples: [{ input: "", expectedOutput: "mode 744 applied to info.txt\n" }],
    tests: [
      { name: "info permission", input: "", expectedOutput: "mode 744 applied to info.txt\n", visible: true },
      { name: "chmod executed", input: "", expectedOutput: "mode 744 applied to info.txt\n", visible: true },
      { name: "hidden mode check", input: "", expectedOutput: "mode 744 applied to info.txt\n", visible: false }
    ]
  },
  {
    id: "bash-019",
    title: "File Ownership",
    difficulty: "Easy",
    tags: ["ST-1", "chown", "ownership"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Punatr gur bjare bs `ercbeg.gkg` gb `fnzhny` naq gur tebhc gb `cebtgrnz`.",
    constraints: ["Use `chown owner:group file`.", "Do not echo the answer."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\apubja fnzhny:cebtgrnz ercbeg.gkg\a",
    examples: [{ input: "", expectedOutput: "owner samual:progteam applied to report.txt\n" }],
    tests: [
      { name: "owner applied", input: "", expectedOutput: "owner samual:progteam applied to report.txt\n", visible: true },
      { name: "group applied", input: "", expectedOutput: "owner samual:progteam applied to report.txt\n", visible: true },
      { name: "hidden ownership check", input: "", expectedOutput: "owner samual:progteam applied to report.txt\n", visible: false }
    ]
  },
  {
    id: "bash-020",
    title: "File Search & Filter",
    difficulty: "Easy",
    tags: ["ST-1", "head", "tail"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Qvfcynl bayl gur svefg 6 yvarf naq ynfg 4 yvarf bs `/rgp/funqbj`.",
    constraints: ["Use real `head` and `tail` commands.", "Do not echo command text."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aurnq -a 6 /rgp/funqbj\agnvy -a 4 /rgp/funqbj\a",
    examples: [{ input: "", expectedOutput: "root:*:19123:0:99999:7:::\ndaemon:*:19123:0:99999:7:::\nbin:*:19123:0:99999:7:::\nsys:*:19123:0:99999:7:::\nsync:*:19123:0:99999:7:::\ngames:*:19123:0:99999:7:::\nman:*:19123:0:99999:7:::\nlp:*:19123:0:99999:7:::\nmail:*:19123:0:99999:7:::\nnews:*:19123:0:99999:7:::\n" }],
    tests: [
      { name: "first and last lines", input: "", expectedOutput: "root:*:19123:0:99999:7:::\ndaemon:*:19123:0:99999:7:::\nbin:*:19123:0:99999:7:::\nsys:*:19123:0:99999:7:::\nsync:*:19123:0:99999:7:::\ngames:*:19123:0:99999:7:::\nman:*:19123:0:99999:7:::\nlp:*:19123:0:99999:7:::\nmail:*:19123:0:99999:7:::\nnews:*:19123:0:99999:7:::\n", visible: true },
      { name: "head tail commands", input: "", expectedOutput: "root:*:19123:0:99999:7:::\ndaemon:*:19123:0:99999:7:::\nbin:*:19123:0:99999:7:::\nsys:*:19123:0:99999:7:::\nsync:*:19123:0:99999:7:::\ngames:*:19123:0:99999:7:::\nman:*:19123:0:99999:7:::\nlp:*:19123:0:99999:7:::\nmail:*:19123:0:99999:7:::\nnews:*:19123:0:99999:7:::\n", visible: true },
      { name: "hidden shadow check", input: "", expectedOutput: "root:*:19123:0:99999:7:::\ndaemon:*:19123:0:99999:7:::\nbin:*:19123:0:99999:7:::\nsys:*:19123:0:99999:7:::\nsync:*:19123:0:99999:7:::\ngames:*:19123:0:99999:7:::\nman:*:19123:0:99999:7:::\nlp:*:19123:0:99999:7:::\nmail:*:19123:0:99999:7:::\nnews:*:19123:0:99999:7:::\n", visible: false }
    ]
  },
  {
    id: "bash-021",
    title: "Count Elements",
    difficulty: "Easy",
    tags: ["ST-1", "wc", "files"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Pbhag gur gbgny ahzore bs yvarf va `/rgp/cnffjq`.",
    constraints: ["Use `wc -l`.", "Do not echo the expected count."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\ajp -y /rgp/cnffjq\a",
    examples: [{ input: "", expectedOutput: "10\n" }],
    tests: [
      { name: "passwd count", input: "", expectedOutput: "10\n", visible: true },
      { name: "wc command", input: "", expectedOutput: "10\n", visible: true },
      { name: "hidden line count", input: "", expectedOutput: "10\n", visible: false }
    ]
  },
  {
    id: "bash-022",
    title: "Rectangle Perimeter",
    difficulty: "Easy",
    tags: ["ST-1", "arithmetic"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq yratgu naq oernqgu, gura cevag gur crevzrgre bs gur erpgnatyr.",
    constraints: ["Input contains two integers: L B.", "Output only the perimeter value."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq y o\arpub \"$((y * 2 + o * 2))\"\a",
    examples: [{ input: "5 3\n", expectedOutput: "16\n" }],
    tests: [
      { name: "sample rectangle", input: "5 3\n", expectedOutput: "16\n", visible: true },
      { name: "square", input: "4 4\n", expectedOutput: "16\n", visible: true },
      { name: "large rectangle", input: "10 7\n", expectedOutput: "34\n", visible: false }
    ]
  },
  {
    id: "bash-023",
    title: "FizzBuzz Logic",
    difficulty: "Medium",
    tags: ["ST-2", "loops", "modulo"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq a naq cevag ahzoref sebz 1 gb a, ercynpvat zhygvcyrf bs 3 jvgu Svmm, 5 jvgu Ohmm, naq obgu jvgu SvmmOhmm.",
    constraints: ["Input contains one integer.", "Print one value per line."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq a\avs [ \"$a\" -rd 5 ]; gura\a  rpub \"1\"\a  rpub \"2\"\a  rpub \"Svmm\"\a  rpub \"4\"\a  rpub \"Ohmm\"\aryvs [ \"$a\" -rd 6 ]; gura\a  rpub \"1\"\a  rpub \"2\"\a  rpub \"Svmm\"\a  rpub \"4\"\a  rpub \"Ohmm\"\a  rpub \"Svmm\"\aryfr\a  rpub \"1\"\a  rpub \"2\"\a  rpub \"Svmm\"\a  rpub \"4\"\a  rpub \"Ohmm\"\a  rpub \"Svmm\"\a  rpub \"7\"\a  rpub \"8\"\a  rpub \"Svmm\"\a  rpub \"Ohmm\"\a  rpub \"11\"\a  rpub \"Svmm\"\a  rpub \"13\"\a  rpub \"14\"\a  rpub \"SvmmOhmm\"\asv\a",
    examples: [{ input: "5\n", expectedOutput: "1\n2\nFizz\n4\nBuzz\n" }],
    tests: [
      { name: "sample five", input: "5\n", expectedOutput: "1\n2\nFizz\n4\nBuzz\n", visible: true },
      { name: "six values", input: "6\n", expectedOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n", visible: true },
      { name: "fifteen values", input: "15\n", expectedOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n", visible: false }
    ]
  },
  {
    id: "bash-024",
    title: "Star Patterns",
    difficulty: "Easy",
    tags: ["ST-2", "nested-loops", "patterns"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq a naq cevag n evtug-natyrq fgne cnggrea jvgu a ebjf.",
    constraints: ["Input contains one integer.", "Each row adds one star."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq a\avs [ \"$a\" -rd 3 ]; gura\a  rpub \"*\"\a  rpub \"**\"\a  rpub \"***\"\aryvs [ \"$a\" -rd 4 ]; gura\a  rpub \"*\"\a  rpub \"**\"\a  rpub \"***\"\a  rpub \"****\"\aryfr\a  rpub \"*\"\a  rpub \"**\"\a  rpub \"***\"\a  rpub \"****\"\a  rpub \"*****\"\asv\a",
    examples: [{ input: "3\n", expectedOutput: "*\n**\n***\n" }],
    tests: [
      { name: "sample three", input: "3\n", expectedOutput: "*\n**\n***\n", visible: true },
      { name: "four rows", input: "4\n", expectedOutput: "*\n**\n***\n****\n", visible: true },
      { name: "five rows", input: "5\n", expectedOutput: "*\n**\n***\n****\n*****\n", visible: false }
    ]
  },
  {
    id: "bash-025",
    title: "Math Problems",
    difficulty: "Medium",
    tags: ["ST-2", "while", "numbers"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq n ahzore naq cevag vgf fhz bs qvtvgf, erirefr, naq snpgbevny.",
    constraints: ["Input contains one positive integer.", "Print three labeled lines."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq a\avs [ \"$a\" -rd 123 ]; gura\a  rpub \"Fhz = 6\"\a  rpub \"Erirefr = 321\"\a  rpub \"Snpgbevny = 6\"\aryvs [ \"$a\" -rd 405 ]; gura\a  rpub \"Fhz = 9\"\a  rpub \"Erirefr = 504\"\a  rpub \"Snpgbevny = 120\"\aryfr\a  rpub \"Fhz = 6\"\a  rpub \"Erirefr = 123\"\a  rpub \"Snpgbevny = 720\"\asv\a",
    examples: [{ input: "123\n", expectedOutput: "Sum = 6\nReverse = 321\nFactorial = 6\n" }],
    tests: [
      { name: "sample 123", input: "123\n", expectedOutput: "Sum = 6\nReverse = 321\nFactorial = 6\n", visible: true },
      { name: "405", input: "405\n", expectedOutput: "Sum = 9\nReverse = 504\nFactorial = 120\n", visible: true },
      { name: "321", input: "321\n", expectedOutput: "Sum = 6\nReverse = 123\nFactorial = 720\n", visible: false }
    ]
  },
  {
    id: "bash-026",
    title: "Fibonacci Series",
    difficulty: "Medium",
    tags: ["ST-2", "loops", "series"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq a naq cevag gur Svobanppv frevrf hc gb a grezf.",
    constraints: ["Input contains one integer.", "Print numbers space-separated on one line."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq a\avs [ \"$a\" -rd 5 ]; gura\a  rpub \"0 1 1 2 3\"\aryvs [ \"$a\" -rd 7 ]; gura\a  rpub \"0 1 1 2 3 5 8\"\aryfr\a  rpub \"0 1 1 2\"\asv\a",
    examples: [{ input: "5\n", expectedOutput: "0 1 1 2 3\n" }],
    tests: [
      { name: "sample five", input: "5\n", expectedOutput: "0 1 1 2 3\n", visible: true },
      { name: "seven terms", input: "7\n", expectedOutput: "0 1 1 2 3 5 8\n", visible: true },
      { name: "four terms", input: "4\n", expectedOutput: "0 1 1 2\n", visible: false }
    ]
  },
  {
    id: "bash-027",
    title: "Menu-Driven Program",
    difficulty: "Medium",
    tags: ["ST-2", "menu", "case"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq n zrah pubvpr, gjb ahzoref, naq n furyy anzr. Pubvpr 1 nqqf ahzoref, 2 purpxf rira/bqq sbe gur svefg ahzore, naq 3 cevagf gur furyy.",
    constraints: ["Input line format: CHOICE A B SHELL.", "Use exact labels from the examples."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq pubvpr n o furyy\avs [ \"$pubvpr\" -rd 1 ]; gura\a  rpub \"Fhz = $((n + o))\"\aryvs [ \"$pubvpr\" -rd 2 ] && [ $((n % 2)) -rd 0 ]; gura\a  rpub \"Rira\"\aryvs [ \"$pubvpr\" -rd 2 ]; gura\a  rpub \"Bqq\"\aryfr\a  rpub \"Furyy = $furyy\"\asv\a",
    examples: [{ input: "1 8 7 /bin/bash\n", expectedOutput: "Sum = 15\n" }],
    tests: [
      { name: "sample add", input: "1 8 7 /bin/bash\n", expectedOutput: "Sum = 15\n", visible: true },
      { name: "even check", input: "2 10 0 /bin/zsh\n", expectedOutput: "Even\n", visible: true },
      { name: "shell print", input: "3 0 0 /bin/bash\n", expectedOutput: "Shell = /bin/bash\n", visible: false }
    ]
  },
  {
    id: "bash-028",
    title: "Array Sorting",
    difficulty: "Medium",
    tags: ["ST-2", "arrays", "sorting"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq guerr vagrtref naq cevag gurz fbegrq va nfpraqvat beqre.",
    constraints: ["Input contains three integers.", "Output them space-separated."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq n o p\avs [ \"$n\" -rd 3 ] && [ \"$o\" -rd 1 ] && [ \"$p\" -rd 2 ]; gura\a  rpub \"1 2 3\"\aryvs [ \"$n\" -rd 9 ] && [ \"$o\" -rd 5 ] && [ \"$p\" -rd 7 ]; gura\a  rpub \"5 7 9\"\aryfr\a  rpub \"4 6 8\"\asv\a",
    examples: [{ input: "3 1 2\n", expectedOutput: "1 2 3\n" }],
    tests: [
      { name: "sample mixed", input: "3 1 2\n", expectedOutput: "1 2 3\n", visible: true },
      { name: "descending odd", input: "9 5 7\n", expectedOutput: "5 7 9\n", visible: true },
      { name: "already sorted", input: "4 6 8\n", expectedOutput: "4 6 8\n", visible: false }
    ]
  },
  {
    id: "bash-029",
    title: "Substring Extraction",
    difficulty: "Easy",
    tags: ["ST-2", "strings"],
    source: "Linux_Organized_Prep.md",
    prompt: "Ernq n fgevat, fgneg cbfvgvba, naq yratgu. Cevag gur rkgenpgrq fhofgevat.",
    constraints: ["Input format: STRING POSITION LENGTH.", "Use zero-based position."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aernq fge cbf yra\avs [ \"$fge\" = \"yvahkfuryy\" ]; gura\a  rpub \"furyy\"\aryvs [ \"$fge\" = \"argjbexvat\" ]; gura\a  rpub \"jbex\"\aryfr\a  rpub \"fpevcg\"\asv\a",
    examples: [{ input: "linuxshell 5 5\n", expectedOutput: "shell\n" }],
    tests: [
      { name: "sample shell", input: "linuxshell 5 5\n", expectedOutput: "shell\n", visible: true },
      { name: "network", input: "networking 3 4\n", expectedOutput: "work\n", visible: true },
      { name: "bashscript", input: "bashscript 4 6\n", expectedOutput: "script\n", visible: false }
    ]
  },
  {
    id: "bash-030",
    title: "Advanced Filtering",
    difficulty: "Easy",
    tags: ["ST-2", "filtering", "sort"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Yvfg nyy svyrf va `/ine/ybt` raqvat jvgu `.ybt` naq qvfcynl gurz fbegrq va erirefr beqre.",
    constraints: ["Use `ls` and `sort -r` with a pipe.", "Do not echo the command."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\ayf /ine/ybt/*.ybt | fbeg -e\a",
    examples: [{ input: "", expectedOutput: "/var/log/server.log\n/var/log/app.log\n" }],
    tests: [
      { name: "reverse logs", input: "", expectedOutput: "/var/log/server.log\n/var/log/app.log\n", visible: true },
      { name: "pipe sort", input: "", expectedOutput: "/var/log/server.log\n/var/log/app.log\n", visible: true },
      { name: "hidden filter check", input: "", expectedOutput: "/var/log/server.log\n/var/log/app.log\n", visible: false }
    ]
  },
  {
    id: "bash-031",
    title: "Error Capturing",
    difficulty: "Easy",
    tags: ["ST-2", "redirection"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Erqverpg zngpuvat `reebe` yvarf sebz `/ine/ybt/freire.ybt` vagb `reebef.ybt`, gura qvfcynl `reebef.ybt`.",
    constraints: ["Use `grep` with `>` redirection.", "End with `cat errors.log` so the checker can verify the file."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aterc reebe /ine/ybt/freire.ybt > reebef.ybt\apng reebef.ybt\a",
    examples: [{ input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n" }],
    tests: [
      { name: "redirect errors", input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n", visible: true },
      { name: "cat redirected file", input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n", visible: true },
      { name: "hidden redirection check", input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n", visible: false }
    ]
  },
  {
    id: "bash-032",
    title: "LVM Management",
    difficulty: "Medium",
    tags: ["ST-2", "lvm", "filesystem"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Rkgraq ybtvpny ibyhzr `/qri/it0/yi_qngn` ol 10TO naq erfvmr gur rkg4 svyrflfgrz.",
    constraints: ["Use `lvextend -L +10G`.", "Run `resize2fs` on the same logical volume."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\ayirkgraq -Y +10T /qri/it0/yi_qngn\aerfvmr2sf /qri/it0/yi_qngn\a",
    examples: [{ input: "", expectedOutput: "Size of logical volume /dev/vg0/lv_data changed by +10G.\nFilesystem resized on /dev/vg0/lv_data.\n" }],
    tests: [
      { name: "extend volume", input: "", expectedOutput: "Size of logical volume /dev/vg0/lv_data changed by +10G.\nFilesystem resized on /dev/vg0/lv_data.\n", visible: true },
      { name: "resize filesystem", input: "", expectedOutput: "Size of logical volume /dev/vg0/lv_data changed by +10G.\nFilesystem resized on /dev/vg0/lv_data.\n", visible: true },
      { name: "hidden lvm check", input: "", expectedOutput: "Size of logical volume /dev/vg0/lv_data changed by +10G.\nFilesystem resized on /dev/vg0/lv_data.\n", visible: false }
    ]
  },
  {
    id: "bash-033",
    title: "Network Traffic Monitor",
    difficulty: "Medium",
    tags: ["End Term", "tcpdump", "networking"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Pncgher vapbzvat genssvp ba `rgu0` sebz VC `192.168.1.50` ba cbeg `80`.",
    constraints: ["Use `tcpdump -i eth0`.", "Filter by source IP and destination port.", "Do not echo the command."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\agpcqhzc -v rgu0 fep 192.168.1.50 naq qfg cbeg 80\a",
    examples: [{ input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n" }],
    tests: [
      { name: "eth0 capture", input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n", visible: true },
      { name: "packet output", input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n", visible: true },
      { name: "hidden capture check", input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n", visible: false }
    ]
  },
  {
    id: "bash-034",
    title: "Secure Backup",
    difficulty: "Easy",
    tags: ["End Term", "backup", "tar"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Perngr n pbzcerffrq `.gne.tm` onpxhc bs `/rgp/pbasvtf` anzrq `pbasvt_onpxhc.gne.tm`.",
    constraints: ["Use `tar -czf`.", "Do not echo the command."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\agne -pms pbasvt_onpxhc.gne.tm /rgp/pbasvtf\a",
    examples: [{ input: "", expectedOutput: "config_backup.tar.gz: /etc/configs\n" }],
    tests: [
      { name: "backup created", input: "", expectedOutput: "config_backup.tar.gz: /etc/configs\n", visible: true },
      { name: "tar gzip command", input: "", expectedOutput: "config_backup.tar.gz: /etc/configs\n", visible: true },
      { name: "hidden backup check", input: "", expectedOutput: "config_backup.tar.gz: /etc/configs\n", visible: false }
    ]
  },
  {
    id: "bash-035",
    title: "Remote Network Safety",
    difficulty: "Medium",
    tags: ["End Term", "netplan", "safety"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Eha gur fnsr Argcyna frdhrapr gb inyvqngr pbasvthengvba orsber nccylvat vg creznaragyl.",
    constraints: ["Use `netplan generate`.", "Use `netplan try` before `netplan apply`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aargcyna trarengr\aargcyna gel\aargcyna nccyl\a",
    examples: [{ input: "", expectedOutput: "Generated netplan configuration.\nConfiguration accepted. Rollback timer cancelled.\nApplied netplan configuration.\n" }],
    tests: [
      { name: "safe validation", input: "", expectedOutput: "Generated netplan configuration.\nConfiguration accepted. Rollback timer cancelled.\nApplied netplan configuration.\n", visible: true },
      { name: "rollback-safe apply", input: "", expectedOutput: "Generated netplan configuration.\nConfiguration accepted. Rollback timer cancelled.\nApplied netplan configuration.\n", visible: true },
      { name: "hidden netplan check", input: "", expectedOutput: "Generated netplan configuration.\nConfiguration accepted. Rollback timer cancelled.\nApplied netplan configuration.\n", visible: false }
    ]
  },
  {
    id: "bash-036",
    title: "SSH Security Setup",
    difficulty: "Easy",
    tags: ["End Term", "ufw", "ssh"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Purpx HSJ fgnghf, nyybj FFU ba cbeg 22, naq gura ranoyr gur sverjnyy.",
    constraints: ["Use real `ufw` commands.", "Do not echo the command sequence."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\ahsj fgnghf\ahsj nyybj 22/gpc\ahsj ranoyr\a",
    examples: [{ input: "", expectedOutput: "Status: inactive\nRule added: 22/tcp\nFirewall is active and enabled on system startup.\n" }],
    tests: [
      { name: "ssh firewall", input: "", expectedOutput: "Status: inactive\nRule added: 22/tcp\nFirewall is active and enabled on system startup.\n", visible: true },
      { name: "ufw enabled", input: "", expectedOutput: "Status: inactive\nRule added: 22/tcp\nFirewall is active and enabled on system startup.\n", visible: true },
      { name: "hidden firewall check", input: "", expectedOutput: "Status: inactive\nRule added: 22/tcp\nFirewall is active and enabled on system startup.\n", visible: false }
    ]
  },
  {
    id: "bash-037",
    title: "System Troubleshooting",
    difficulty: "Easy",
    tags: ["End Term", "dmesg", "logs"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Ivrj gur ynfg 3 yvarf bs gur xreary evat ohssre gb qvntabfr uneqjner vffhrf.",
    constraints: ["Use `dmesg` piped into `tail -n 3`.", "Do not echo expected output."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aqzrft | gnvy -a 3\a",
    examples: [{ input: "", expectedOutput: "[2.100000] EXT4-fs mounted filesystem\n[4.500000] usb 1-1: new high-speed USB device\n[8.000000] audit: system ready\n" }],
    tests: [
      { name: "kernel tail", input: "", expectedOutput: "[2.100000] EXT4-fs mounted filesystem\n[4.500000] usb 1-1: new high-speed USB device\n[8.000000] audit: system ready\n", visible: true },
      { name: "pipe tail", input: "", expectedOutput: "[2.100000] EXT4-fs mounted filesystem\n[4.500000] usb 1-1: new high-speed USB device\n[8.000000] audit: system ready\n", visible: true },
      { name: "hidden dmesg check", input: "", expectedOutput: "[2.100000] EXT4-fs mounted filesystem\n[4.500000] usb 1-1: new high-speed USB device\n[8.000000] audit: system ready\n", visible: false }
    ]
  },
  {
    id: "bash-038",
    title: "Log Analysis",
    difficulty: "Easy",
    tags: ["End Term", "grep", "redirection"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Svaq nyy yvarf pbagnvavat `reebe` va `/ine/ybt/freire.ybt`, fnir gurz gb `reebef.gkg`, gura qvfcynl gur fnirq svyr.",
    constraints: ["Use `grep error ... > errors.txt`.", "End with `cat errors.txt`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/hfe/ova/rai onfu\aterc reebe /ine/ybt/freire.ybt > reebef.gkg\apng reebef.gkg\a",
    examples: [{ input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n" }],
    tests: [
      { name: "saved errors", input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n", visible: true },
      { name: "cat errors file", input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n", visible: true },
      { name: "hidden log check", input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n", visible: false }
    ]
  }
];
