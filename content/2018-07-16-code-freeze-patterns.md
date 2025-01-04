---
title: Code Freeze Patterns
date: 2018-07-16 12:34:44
author: John Vandivier
---



In development you can institute a couple different kinds of code freeze. This article describes them and gives pros and cons.
<ol>
 	<li>Hard Freeze
<ol>
 	<li>A hard freeze is handled at the source control management or deployment level.</li>
 	<li>Turning off deployments is a hard freeze. Jenkins or Puppet might control such a freeze. Developers can continue to check in code to any branch, but changes will not be deployed.</li>
 	<li>Instead of barring deployments, a hard freeze can be a lock on code checked in, but it must be administered at the source control management level. For example, removing check in permissions for users on a certain repository.</li>
</ol>
</li>
 	<li>Soft Freeze
<ol>
 	<li>A soft freeze is handled by developer agreement. Developers will still have permission to check in from a technical perspective, but they agree not to as a matter of process.</li>
 	<li>Soft freezes will usually include a process for creating exceptions which allow for some code to be checked in. For example, a project manager may declare that bug fixes for a particular feature are still allowed to be checked in, perhaps with additional peer review or other safety checks.</li>
</ol>
</li>
 	<li>Code Frost
<ol>
 	<li>Another version of a soft freeze is called a code frost. Under a code frost changes are expected, but fewer changes occur compared to normal development. Sometimes this process is used to substitute for a code freeze and other times it is a preparatory period or a winding down before an official code freeze.</li>
 	<li>A code frost works like a blanket soft freeze exception: A project manager or other team leadership member will declare that only certain kinds of changes are acceptable and it is left to the developers to self-enforce the merging of allowed changes during peer review.</li>
</ol>
</li>
</ol>
Hard code freezes are a less good idea when the Scrum Team does not control the SCM Team. When this happens, the SCM team may not be able to effectively support changes because they may be busy doing other things or otherwise uncontrolled. Soft freezes can be completely handled by the development team, but they are more likely to be abused such that non-allowed code changes are entered into the code base. If the SCM team is integrated into the development team then a hard freeze is a great idea. I like to do them at the deployment level because it is easier to configure.

As a matter of preference I am a fan of early code freezes. I like to have two week sprints and start code freeze at the end of the first week.