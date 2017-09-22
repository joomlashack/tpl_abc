<?php
/**
 * @copyright	Copyright (C) 2005 - 2016 Joomlashack / Meritage Assets
 * @author		Jeremy Wilken - Joomlashack
 * @package		Wright
 *
 * Use this file to add any PHP to the template before it is executed
 */

// Restrict Access to within Joomla
defined('_JEXEC') or die('Restricted access');

JLoader::import('joomla.environment.browser');

$bodyclass = "";
if ($this->countModules('toolbar')) {
	$bodyclass = "toolbarpadding";
}

$user = JFactory::getUser();
$theme = JRequest::getVar('templateTheme',$user->getParam('theme',$this->params->get('style','red')));
